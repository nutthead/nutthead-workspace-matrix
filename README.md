# Workspace Matrix

GNOME shell extension to arrange workspaces in a two dimensional grid with workspace thumbnails.

<p align="center">
   <img src="preview.png" alt="Preview">
</p>
<p align="center">
   <sup>Theme: <a href="https://github.com/mzur/Numix-Complement">Numix-Complement</a></sup>
</p>

This is an independent fork of the [Workspace Matrix](https://github.com/mzur/gnome-shell-wsmatrix) extension. User's selected "Wraparound mode" was not persisting, so I decided to fork it and fix it. Later on, I want to make substational changes to the extension, so I left the parent extension's [fork network](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/detaching-a-fork).

## Features

- Configurable number of rows and columns of the workspace grid.
- Workspace thumbnails with live previews of the workspaces (optional).
- Configurable scale of the workspace thumbnails.
- Configurable timeout of the workspace switcher popup.
- Three wraparound modes for navigating workspaces (optional).
- Workspace labels in the workspace switcher popup (optional).
- Workspace overview on <kbd>Super</kbd>+<kbd>W</kbd>.
- Workspace switcher popup on all monitors (optional).
- Workspace grid in the activity overview (optional).

## Installation

The easiest way to install this extension is via the [GNOME Shell Extensions](https://extensions.gnome.org/extension/1485/workspace-matrix/) website. Alternative installation methods are noted below.

[<img src="https://raw.githubusercontent.com/andyholmes/gnome-shell-extensions-badge/master/get-it-on-ego.svg?sanitize=true" height="100">](https://extensions.gnome.org/extension/1485/workspace-matrix/)

### GNOME Shell Extensions Website Method

1. Visit the [GNOME Shell Extensions](https://extensions.gnome.org/extension/1485/workspace-matrix/) website. Follow the instructions to install the [GNOME native host connector/messaging application](https://wiki.gnome.org/Projects/GnomeShellIntegrationForChrome/Installation) and browser extension.
2. To install Workspace Matrix, click to toggle the "Off" icon on the [extension page](https://extensions.gnome.org/extension/1485/workspace-matrix/). A red "ERROR" icon can safely be [ignored](https://github.com/mzur/gnome-shell-wsmatrix/issues/52). This issue is resolved after a [restart](#how-do-i-restart-gnome-shell) of GNOME Shell.
3. [Restart](#how-do-i-restart-gnome-shell) GNOME Shell.

To configure the extension, return to the [extension page](https://extensions.gnome.org/extension/1485/workspace-matrix/) page and click the blue "tool" icon.

### Manual Linux Method

1. Download the ZIP file of the [latest release](https://github.com/nutthead/nutthead-workspace-matrix/releases) and extract it to `~/.local/share/gnome-shell/extensions/hello@behrang.org` 
2. [Restart](#how-do-i-restart-gnome-shell) GNOME Shell.
3. Run `gnome-extensions enable hello@behrang.org` in the terminal.
4. [Restart](#how-do-i-restart-gnome-shell) GNOME Shell a second time.

### Arch Linux Method

On Arch Linux, use [this AUR](https://aur.archlinux.org/packages/gnome-shell-extension-workspace-matrix):
   ```
   git clone https://aur.archlinux.org/gnome-shell-extension-workspace-matrix.git
   cd gnome-shell-extension-workspace-matrix
   makepkg -sri
   ```

### Nix/NixOS Method

This extension is already on [Nix packages](https://search.nixos.org/packages?channel=23.05&show=gnomeExtensions.workspace-matrix&from=0&size=50&buckets=%7B%22package_attr_set%22%3A%5B%22gnomeExtensions%22%5D%2C%22package_license_set%22%3A%5B%5D%2C%22package_maintainers_set%22%3A%5B%5D%2C%22package_platforms%22%3A%5B%5D%7D&sort=relevance&type=packages&query=matrix), so it should be as simple as installing it with:
```
nix-env -iA nixos.gnomeExtensions.workspace-matrix
```
or this for nix (not NixOS) users:
```
nix-env -iA nixpkgs.gnomeExtensions.workspace-matrix
```

## Known Issues / FAQ

### How do I restart GNOME Shell?

- If you are running the newer [Wayland](https://wayland.freedesktop.org/) system, log out and log back in.

- If you are running the X.org/X window system, press <kbd>Alt</kbd>+<kbd>F2</kbd>, type <kbd>r</kbd> in the "Run a command" prompt and press <kbd>Enter</kbd>.

### My windows jump between workspaces after the machine was locked or suspended

Disable the extension, set workspaces to "static" in GNOME Tweaks and then enable this extension again.

### How do I change the keyboard shortcuts?

See the extension's repository documentation for information about available keyboard shortcuts.

### How do I change the workspace labels?

See the extension's repository documentation for information about assigning custom workspace labels.

### How do I manually open the Workspace Matrix preferences window?

Go to the terminal and run `gnome-extensions prefs hello@behrang.org` and the preferences pop-up should appear. Closing this pop-up will save any changes.


## Contributing

Pull requests for issues that are marked as "bug" or "help wanted" are always welcome. If you want to implement any other new feature, please open an issue about this first. See the next section on how to get started with development.

If you want to report a bug, please attach the output of the command `journalctl /usr/bin/gnome-shell`.

## Developing

You can develop this extension "live" while it is installed in GNOME on your system:

1. Uninstall this extension if it is already installed. You can do this via the [GNOME Shell Extensions](https://extensions.gnome.org/extension/1485/workspace-matrix/) website.
2. Fork this repository and clone your fork somewhere, e.g. to `~/code/nutthead-workspace-matrix`.
3. (optional) If testing a pull request, you may checkout the branch of the pull request using the [`gh`](https://github.com/cli/cli) utility command.
4. Create a symlink from the repository to the GNOME extensions directory, e.g.:
   ```
   ln -s ~/code/nutthead-workspace-matrix/hello@behrang.org ~/.local/share/gnome-shell/extensions/hello@behrang.org
   ```
5. Restart GNOME by pressing <kbd>Alt</kbd>+<kbd>F2</kbd> and running the command `r` (X.org) or log out and back in (Wayland). Do this whenever you want to apply and test a change of the code.

If you change something in the gschema XML file, run `make` to recompile it. The `make` command also builds the ZIP file that can be used for new releases of this extension.
