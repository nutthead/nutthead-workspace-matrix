import * as Main from "resource:///org/gnome/shell/ui/main.js";
import Clutter from "gi://Clutter";
import GLib from "gi://GLib";
import GObject from "gi://GObject";
import Meta from "gi://Meta";
import St from "gi://St";
import WorkspaceSwitcherPopupList from "./workspaceSwitcherPopupList.js";
import WorkspaceThumbnail from "./workspaceThumbnail.js";
import { SwitcherPopup } from "resource:///org/gnome/shell/ui/switcherPopup.js";

const modals = [];

export default GObject.registerClass(
	class WorkspaceSwitcherPopup extends SwitcherPopup {
		_init(options, wm) {
			super._init();
			this._monitorIndex = options.monitorIndex;
			this._monitor = Main.layoutManager.monitors[this._monitorIndex];
			this._scale = options.scale;
			this._popupTimeout = options.popupTimeout;
			this._enablePopupWorkspaceHover = options.enablePopupWorkspaceHover;
			this._wm = wm;
			this._toggle = options.toggle || false;
			this._items = this._createThumbnails();
			this._switcherList = new WorkspaceSwitcherPopupList(
				this._items,
				this._createLabels(),
				options,
			);
			this._overviewKeybindingActions = options.overveiwKeybindingActions;
			this._noModsTimeoutId = 0;

			// Initially disable hover so we ignore the enter-event if
			// the switcher appears underneath the current pointer location
			this._disableHover();
		}

		_createThumbnails() {
			const thumbnails = [];
			const workspaceManager = global.workspace_manager;

			for (let i = 0; i < workspaceManager.n_workspaces; i++) {
				const workspace = workspaceManager.get_workspace_by_index(i);
				const thumbnail = new WorkspaceThumbnail(workspace, this._monitorIndex);
				thumbnails.push(thumbnail);
			}

			return thumbnails;
		}

		_createLabels() {
			const labels = [];
			const workspaceManager = global.workspace_manager;

			for (let i = 0; i < workspaceManager.n_workspaces; i++) {
				const label = Meta.prefs_get_workspace_name(i);
				labels.push(label);
			}

			return labels;
		}

		// initial selection of workspace in the popup, if not implemented, a movement to current workspace will occur everytime the popup shows up
		_initialSelection(_backward, _binding) {
			const workspaceManager = global.workspace_manager;
			this._switcherList.highlight(
				workspaceManager.get_active_workspace_index(),
			);
		}

		// select next workspace (used while scrolling the switcher popup with the mouse wheel)
		_next() {
			const workspaceManager = global.workspace_manager;
			return Math.min(
				workspaceManager.get_active_workspace_index() + 1,
				workspaceManager.n_workspaces - 1,
			);
		}

		// select previous workspace (used while scrolling the switcher popup with the mouse wheel)
		_previous() {
			const workspaceManager = global.workspace_manager;
			return Math.max(workspaceManager.get_active_workspace_index() - 1, 0);
		}

		// on workspace selected (in switcher popup)
		_select(num) {
			this.selectedIndex = num;
			this._switcherList.highlight(num);

			// on item selected, switch/move to the workspace
			const workspaceManager = global.workspace_manager;
			const { wm } = Main;
			const newWs = workspaceManager.get_workspace_by_index(this.selectedIndex);
			wm.actionMoveWorkspace(newWs);
		}

		_itemEnteredHandler(index) {
			if (this._enablePopupWorkspaceHover) {
				this._select(index);
			}
		}

		showToggle(_backward, binding, mask, toggle) {
			this.resetTimeout();

			this._toggle = toggle;
			if (this._popupTimeout > 0 || this._toggle) {
				mask = 0;
			}

			if (this.show(_backward, binding, mask)) {
				this._showImmediately();
				this.opacity = 255;
				modals.push(this);
			}
		}

		_resetNoModsTimeout() {
			// Disable this function so the custom timeout works.
		}

		resetTimeout() {
			modals
				.filter((modal) => modal)
				.forEach((modal) => {
					if (modal._noModsTimeoutId !== 0) {
						GLib.source_remove(modal._noModsTimeoutId);
						modal._noModsTimeoutId = 0;
					}
				});

			if (this._popupTimeout > 0 && !this._toggle) {
				this._noModsTimeoutId = GLib.timeout_add(
					GLib.PRIORITY_DEFAULT,
					this._popupTimeout,
					() => {
						this._finish(global.display.get_current_time_roundtrip());
						this._noModsTimeoutId = 0;
						return GLib.SOURCE_REMOVE;
					},
				);
			}
		}

		_keyPressHandler(_keysym, _action) {
			if (this._toggle) {
				for (const key in this._overviewKeybindingActions) {
					if (this._overviewKeybindingActions[key] === _action) {
						switch (key) {
							case "right":
								this._wm._workspaceOverviewMoveRight();
								break;
							case "left":
								this._wm._workspaceOverviewMoveLeft();
								break;
							case "up":
								this._wm._workspaceOverviewMoveUp();
								break;
							case "down":
								this._wm._workspaceOverviewMoveDown();
								break;
							case "confirm":
								this.fadeAndDestroy();
								break;
						}

						return Clutter.EVENT_STOP;
					}
				}
			}

			for (const actionKey in Meta.KeyBindingAction) {
				const value = Meta.KeyBindingAction[actionKey];
				if (value === _action) {
					let key = actionKey.toLowerCase();
					if (key.startsWith("workspace_")) {
						key = `switch-to-workspace-${key.replace("workspace_", "")}`;
					}

					if (key.startsWith("move_to_workspace_")) {
						key = `move-to-workspace-${key.replace("move_to_workspace_", "")}`;
					}

					this._wm._showWorkspaceSwitcher(
						global.display,
						global.display.focus_window,
						null,
						key,
					);
				}
			}

			return Clutter.EVENT_PROPAGATE;
		}

		_finish(_timestamp) {
			this._disableHover();
			while (modals.length > 0) {
				modals.pop().fadeAndDestroy();
			}
		}

		_onDestroy() {
			if (this._noModsTimeoutId !== 0) {
				GLib.source_remove(this._noModsTimeoutId);
				this._noModsTimeoutId = 0;
			}

			this._items.forEach((x) => x.destroy());
			this._items = [];

			super._onDestroy();

			while (modals.length > 0) {
				modals.pop().destroy();
			}
		}

		vfunc_allocate(box) {
			this.set_allocation(box);
			const childBox = new Clutter.ActorBox();

			const leftPadding = this.get_theme_node().get_padding(St.Side.LEFT);
			const rightPadding = this.get_theme_node().get_padding(St.Side.RIGHT);
			const hPadding = leftPadding + rightPadding;

			// Allocate the switcherList
			// We select a size based on an icon size that does not overflow the screen
			const [, childNaturalHeight] = this._switcherList.get_preferred_height(
				this._monitor.width - hPadding,
			);
			const [, childNaturalWidth] =
				this._switcherList.get_preferred_width(childNaturalHeight);
			childBox.x1 = Math.max(
				this._monitor.x + leftPadding,
				this._monitor.x +
					Math.floor((this._monitor.width - childNaturalWidth) / 2),
			);
			childBox.x2 = Math.min(
				this._monitor.x + this._monitor.width - rightPadding,
				childBox.x1 + childNaturalWidth,
			);
			childBox.y1 =
				this._monitor.y +
				Math.floor((this._monitor.height - childNaturalHeight) / 2);
			childBox.y2 = childBox.y1 + childNaturalHeight;
			this._switcherList.allocate(childBox);
		}
	},
);
