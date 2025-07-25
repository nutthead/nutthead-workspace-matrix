import ControlsManagerLayout from "./controlsManagerLayout.js";
import SecondaryMonitorDisplay from "./secondaryMonitorDisplay.js";
import ThumbnailsBox from "./thumbnailsBox.js";
import WorkspacesView from "./workspacesView.js";

export default class OverviewManager {
	constructor(settings) {
		this._settings = settings;
		this._overrides = [
			new WorkspacesView(),
			new SecondaryMonitorDisplay(),
			new ThumbnailsBox(),
			new ControlsManagerLayout(),
		];
	}

	enable() {
		this._connectSettings();
		this._handleShowOverviewGridChanged();
	}

	_connectSettings() {
		this.settingsHandlerShowOverviewGrid = this._settings.connect(
			"changed::show-overview-grid",
			this._handleShowOverviewGridChanged.bind(this),
		);
	}

	_disconnectSettings() {
		this._settings.disconnect(this.settingsHandlerShowOverviewGrid);
	}

	_handleShowOverviewGridChanged() {
		const show = this._settings.get_boolean("show-overview-grid");
		if (show) {
			this.override();
		} else {
			this.restore();
		}
	}

	override() {
		this._overrides.forEach((override) => override.enable());
	}

	restore() {
		this._overrides.forEach((override) => override.disable());
	}

	disable() {
		this.restore();
		this._disconnectSettings();
	}
}
