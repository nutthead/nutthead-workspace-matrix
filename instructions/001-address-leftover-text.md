This extension is a fork. In the original repo, it had this metadata:
```
{
    "shell-version": [
		"48"
    ],
    "uuid": "wsmatrix@martin.zurowietz.de",
    "url": "https://github.com/mzur/gnome-shell-wsmatrix",
    "settings-schema": "org.gnome.shell.extensions.wsmatrix-settings",
    "keybindings-schema": "org.gnome.shell.extensions.wsmatrix-keybindings",
    "gettext-domain": "wsmatrix",
    "version": -1,
    "name": "Workspace Matrix",
    "description": "Arrange workspaces in a two dimensional grid with workspace thumbnails.\n\nIf you appreciate this extension please consider to donate $1.",
    "donations": {
        "paypal": "drmzur",
        "github": "mzur"
    }
}
```

Now its metadata has been changed to:
```
{
    "shell-version": [
		"46",
		"47",
		"48",
		"49"
    ],
    "uuid": "hello@behrang.org",
    "url": "https://github.com/nutthead/nutthead-workspace-matrix",
    "settings-schema": "org.gnome.shell.extensions.org.nutthead.workspace-matrix-settings",
    "keybindings-schema": "org.gnome.shell.extensions.org.nutthead.workspace-matrix-keybindings",
    "gettext-domain": "wsmatrix",
    "version": -1,
    "name": "Workspace Matrix",
    "description": "Arrange workspaces in a two dimensional grid with workspace thumbnails.\n\nIf you appreciate this extension please consider to donate $1.",
    "donations": {
        "paypal": "behrangsa",
        "github": "behrangsa"
    }
}
```

However I still see texts in project files that must have been updated but aren't yet:

## 1: file:hello@behrang.org/extension.js
```
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class WsmatrixExtension extends Extension {
    enable() {
        let settings = this.getSettings();
```

The classname should change to `WorkspaceMatrixExtension`.

## 2: file:hello@behrang.org/metadata.json
```
    "gettext-domain": "wsmatrix",
```

Value of `gettext-domain` should change to `workspace-matrix`.

## 3: file:hello@behrang.org/workspacePopup/workspaceManagerOverride.js
```
_wsmatrixTimeoutId
```

This variable should be renamed to `_wsmatrixTimeoutId`.

## 4: file:scripts/install-and-test.sh
```
cp schemas/org.gnome.shell.extensions.wsmatrix.gschema.xml ~/.local/share/glib-2.0/schemas/
```
<ultrathink>
The extension no longer uses `org.gnome.shell.extensions.wsmatrix` in its "namespaces". I think it should be changed to
`org.gnome.shell.extensions.workspace-matrix`, but WebSearch, research, think hard and confirm. You may want to read file:fetches/summaries/guide/gjs/anatomy.md
for some helpful information.
</ultrathink>

## 5: file:README.md
```
2. Fork this repository and clone your fork somewhere, e.g. to `~/code/gnome-shell-wsmatrix`.
```

Read README.md and pay attention to its content and details. Some text such as:
```
2. Fork this repository and clone your fork somewhere, e.g. to `~/code/gnome-shell-wsmatrix`.
```

should change and use names appropriate for our extension. For example, instead of `~/code/gnome-shell-wsmatrix`, we should use `~/code/nutthead-workspace-matrix`.

Ultrathink and carefully updated the project and address items 1 to 5.
