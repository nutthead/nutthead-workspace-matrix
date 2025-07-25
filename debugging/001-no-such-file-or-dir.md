We seem to have another bug. When I expand the extension (see: /home/amadeus/Pictures/Screenshots/2025/07/25/toggle-expand.png), and then click on "See Details" (see: /home/amadeus/Pictures/Screenshots/2025/07/25/see-details.png), I am presented with a screen that says "An Error Occurred" (see: /home/amadeus/Pictures/Screenshots/2025/07/25/an-error-occurred.png).

Ultrathink and extract the relevant logs and figure out what error occurs and why does it occur.



The settings of extension hello@behrang.org had an error:
```
GLib.FileError: Failed to open file “/home/amadeus/.local/share/gnome-shell/extensions/hello@behrang.org/schemas/gschemas.compiled”: open() failed: No such file or directory

Stack trace:
  getSettings@resource:///org/gnome/Shell/Extensions/js/extensions/sharedInternals.js:100:53
  fillPreferencesWindow@file:///home/amadeus/.local/share/gnome-shell/extensions/hello@behrang.org/prefs.js:8:29
  _loadPrefs@resource:///org/gnome/Shell/Extensions/js/extensionPrefsDialog.js:41:18
  async*_init@resource:///org/gnome/Shell/Extensions/js/extensionPrefsDialog.js:26:14
  ExtensionPrefsDialog@resource:///org/gnome/Shell/Extensions/js/extensionPrefsDialog.js:17:4
  OpenExtensionPrefsAsync@resource:///org/gnome/Shell/Extensions/js/extensionsService.js:139:33
  async*_handleMethodCall@resource:///org/gnome/gjs/modules/core/overrides/Gio.js:373:35
  _wrapJSObject/<@resource:///org/gnome/gjs/modules/core/overrides/Gio.js:408:34
  _init/GLib.MainLoop.prototype.runAsync/</<@resource:///org/gnome/gjs/modules/core/overrides/GLib.js:266:34  
```
