# GNOME Shell Extension Anatomy - Complete Documentation Summary

**Source:** https://gjs.guide/extensions/overview/anatomy.html  
**Fetched:** 2025-07-25 via httrack  
**Raw files:** `../../../raws/guide/gjs/`

## Extension Directory Structure

A typical GNOME Shell extension has the following file structure:

```
extension-name@domain.com/
    locale/
        de/
          LC_MESSAGES/
              example.mo
    schemas/
        gschemas.compiled
        org.gnome.shell.extensions.example.gschema.xml
    extension.js
    metadata.json
    prefs.js
    stylesheet.css
```

**Key Installation Path**: Extensions must be installed to `~/.local/share/gnome-shell/extensions/[uuid]/` where the directory name matches the extension's UUID.

## 1. metadata.json (Required File)

The `metadata.json` file contains basic information about the extension and is **required** for every extension.

### Minimal Example:
```json
{
    "uuid": "example@gjs.guide",
    "name": "Example Extension",
    "description": "An example extension",
    "shell-version": [ "45" ],
    "url": "https://gjs.guide/extensions"
}
```

### Complete Example with All Fields:
```json
{
    "uuid": "example@gjs.guide",
    "name": "Example Extension",
    "description": "An example extension",
    "shell-version": [ "3.38", "45" ],
    "url": "https://gijs.guide/extensions",
    "gettext-domain": "example@gjs.guide",
    "settings-schema": "org.gnome.shell.extensions.example",
    "session-modes": ["user", "unlock-dialog"],
    "donations": {
        "github": "john_doe",
        "custom": ["https://example.com/1/", "https://example.com/2/"]
    },
    "version": 2,
    "version-name": "1.1"
}
```

### Required Fields:

#### `uuid`
- **Purpose**: Globally-unique identifier for the extension
- **Format**: Two parts separated by `@`: `extension-name@domain.com`
- **Rules**: Only letters, numbers, period (`.`), underscore (`_`), and hyphen (`-`) allowed
- **Examples**: `click-to-focus@username.github.io`, `adblock@username.gmail.com`
- **Restriction**: Extensions cannot use `gnome.org` without GNOME Foundation permission

#### `name`
- **Purpose**: Short, descriptive display name  
- **Examples**: "Click To Focus", "Adblock", "Shell Window Shrinker"

#### `description`
- **Purpose**: Short description of extension function
- **Features**: Can use `\n` and `\t` escape sequences for line breaks and tabs

#### `shell-version`
- **Purpose**: Array of supported GNOME Shell versions
- **Format**: 
  - GNOME 3.38 and earlier: Major.minor format (`"3.38"`)
  - GNOME 40+: Major version only (`"40"`, `"41"`, `"45"`)
- **Requirement**: Must include at least one entry or extension becomes uninstallable
- **Note**: `disable-extension-version-validation` setting controls enforcement (default `false` from GNOME 40+)

#### `url`
- **Purpose**: Extension homepage/repository URL
- **Requirement**: Required for extensions submitted to extensions.gnome.org

### Optional Fields:

#### `gettext-domain`
- **Purpose**: Translation domain for automatic translation initialization
- **Recommendation**: Use the extension UUID (e.g., `example@gjs.guide`)

#### `settings-schema`
- **Purpose**: GSettings schema ID for extension preferences
- **Convention**: `org.gnome.shell.extensions.[extension-id]`
- **Usage**: Used by `Extension.getSettings()` and `ExtensionPreferences.getSettings()`

#### `session-modes` (Added in GNOME 42)
- **Purpose**: Specifies supported GNOME Shell session modes
- **Default**: `["user"]` if not specified
- **Options**:
  - `"user"`: Active user sessions (enabled when unlocked, disabled when locked)
  - `"unlock-dialog"`: Runs on lock screen
  - `"gdm"`: Runs on login screen (system extensions only)

#### `version`
- **Purpose**: Submission version (controlled by GNOME Extensions website)
- **Format**: **Whole number only** (e.g., `1`, not `"1"` or `1.1`)
- **Warning**: Should NOT be set by developers (website overrides this)
- **Special Value**: `-1` can be used to prevent upgrade notifications (common in forks)

#### `version-name`
- **Purpose**: User-visible version string
- **Format**: String with letters, numbers, spaces, periods (1-16 characters)
- **Regex**: `/^(?!^[. ]+$)[a-zA-Z0-9 .]{1,16}$/`

#### `donations`
- **Purpose**: Donation links object
- **Supported Platforms**: `buymeacoffee`, `custom`, `github`, `kofi`, `liberapay`, `opencollective`, `patreon`, `paypal`
- **Format**: String or array of strings (max 3)

## 2. extension.js (Required File)

**Critical Note**: GNOME Shell uses ESModules as of GNOME 45.

The `extension.js` file must export a subclass of the base `Extension` class and implement `enable()` and `disable()` methods.

### Basic Structure:
```javascript
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class ExampleExtension extends Extension {
    /**
     * Constructor called once when extension is loaded (not enabled)
     * Use for setup that happens only once (translations, etc.)
     * MUST NOT make changes to GNOME Shell here
     */
    constructor(metadata) {
        super(metadata);
        console.debug(`constructing ${this.metadata.name}`);
    }

    /**
     * Called when extension is enabled
     * Setup your extension functionality here
     */
    enable() {
        console.debug(`enabling ${this.metadata.name}`);
        // Extension logic goes here
    }

    /**
     * Called when extension is disabled, uninstalled, or screen locks
     * MUST undo everything done in enable()
     * Critical for extension approval!
     */
    disable() {
        console.debug(`disabling ${this.metadata.name}`);
        // Cleanup logic goes here
    }
}
```

### Key Points:
- **Process Context**: Runs in the same process as `gnome-shell`
- **Available APIs**: Access to Clutter and St toolkits, live GNOME Shell code
- **Error Impact**: Fatal errors affect desktop stability
- **Constructor Rules**: If overriding constructor, must call `super(metadata)`

### ExtensionMetadata Object:
- Passed to constructor and available as `this.metadata`
- Contains all fields from `metadata.json`
- Referenced in Extension (ESModule) topic page for full details

## 3. prefs.js (Optional File)

**Note**: Uses ESModules as of GNOME 45.

Used to build extension preferences UI. If absent, no preferences button appears in GNOME Extensions.

### Basic Structure:
```javascript
import Gtk from 'gi://Gtk?version=4.0';
import Adw from 'gi://Adw';

import {ExtensionPreferences, gettext as _} from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

export default class ExamplePreferences extends ExtensionPreferences {
    /**
     * Constructor called when preferences are about to open
     * Use for setup (translations, etc.)
     */
    constructor(metadata) {
        super(metadata);
        console.debug(`constructing preferences for ${this.metadata.name}`);
    }

    /**
     * Fill the preferences window with settings
     */
    fillPreferencesWindow(window) {
        const page = new Adw.PreferencesPage({
            title: _('General'),
            icon_name: 'dialog-information-symbolic',
        });
        window.add(page);

        const group = new Adw.PreferencesGroup({
            title: _('Settings'),
            description: _('Configure the extension'),
        });
        page.add(group);

        // Create preferences row
        const row = new Adw.SwitchRow({
            title: _('Show Indicator'),
            subtitle: _('Whether to show the panel indicator'),
        });
        group.add(row);
    }
}
```

### Key Points:
- **Process Context**: Runs in separate GTK process (isolated from GNOME Shell)
- **Available APIs**: GTK4 and Adwaita toolkits only
- **Error Impact**: Contained within preferences process
- **Manual Access**: `gnome-extensions prefs example@gjs.guide`

## 4. stylesheet.css (Optional File)

CSS stylesheet for styling extension widgets and GNOME Shell elements.

**Important**: Only applies to GNOME Shell and extensions, NOT preferences or other applications.

### Example Usage:

#### JavaScript (extension.js):
```javascript
import GObject from 'gi://GObject';
import St from 'gi://St';

// Standard StLabel with style class
const label = new St.Label({
    text: 'LabelText',
    style_class: 'example-style',
});

// StLabel subclass with GTypeName
const ExampleLabel = GObject.registerClass({
    GTypeName: 'ExampleLabel',
}, class ExampleLabel extends St.Label {
});

const exampleLabel = new ExampleLabel({
    text: 'Label Text',
});
```

#### CSS (stylesheet.css):
```css
/* Style all StLabel elements */
StLabel {
    color: red;
}

/* Style elements with "example-style" class */
.example-style {
    color: green;
}

/* Style StLabel elements with "example-style" class */
StLabel.example-style {
    color: blue;
}

/* Style by GTypeName */
ExampleLabel {
    color: purple;
}
```

## 5. Additional Files and Directories

### schemas/ Directory
- **Purpose**: GSettings schema definitions
- **Files**: 
  - `*.gschema.xml`: Schema definition files
  - `gschemas.compiled`: Compiled schema (auto-generated)
- **Reference**: Detailed in Preferences page documentation

### locale/ Directory  
- **Purpose**: Gettext translation files
- **Structure**: `locale/[language]/LC_MESSAGES/[domain].mo`
- **Reference**: Detailed in Translations page documentation

## Version and Compatibility Information

### GNOME Version Support:
- **shell-version Format**:
  - GNOME ≤3.38: `"3.38"` (major.minor)
  - GNOME ≥40: `"40"`, `"41"`, `"45"` (major only)

### Module System:
- **GNOME 45+**: ESModules (current documentation)
- **Pre-GNOME 45**: Legacy system (see Legacy Documentation)

### Extension Installation Path:
```bash
~/.local/share/gnome-shell/extensions/[uuid]/
```

## Best Practices and Important Notes:

1. **Critical cleanup rule**: Everything done in `enable()` MUST be undone in `disable()` - this is the most common reason for extension rejection.

2. **Process separation**: 
   - `extension.js`: Runs in gnome-shell process (has Shell access, affects stability)
   - `prefs.js`: Runs in separate GTK process (isolated, safer)

3. **Version validation**: GNOME 40+ enforces `shell-version` by default (was optional before).

4. **UUID requirements**: Must match directory name and be globally unique.

5. **Schema conventions**: Extension schemas should start with `org.gnome.shell.extensions.`

6. **Session modes**: Most extensions only need `"user"` mode unless specifically requiring lock screen or login screen functionality.

## Key Findings for Workspace Matrix Extension

Based on this documentation analysis:

- **Version field `-1`**: Valid and commonly used in forks to prevent upgrade notifications
- **Schema naming**: Current convention `org.gnome.shell.extensions.org.nutthead.workspace-matrix-*` follows official guidelines
- **Shell versions**: Current support for `["46", "47", "48", "49"]` is properly formatted
- **Extension structure**: Current file organization matches recommended patterns
- **UUID format**: `hello@behrang.org` follows proper naming conventions

This comprehensive documentation covers all the essential aspects of GNOME Shell extension anatomy, providing developers with the complete technical reference for creating properly structured extensions.