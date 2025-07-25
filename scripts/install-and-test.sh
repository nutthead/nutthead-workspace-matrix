#!/bin/bash

echo "🚀 Installing Workspace Matrix Extension..."

# Get script directory and project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Create directory
mkdir -p ~/.local/share/gnome-shell/extensions/hello@behrang.org

# Copy files
cp -r "$PROJECT_ROOT/hello@behrang.org"/* ~/.local/share/gnome-shell/extensions/hello@behrang.org/

# Compile schemas locally in extension directory
cd ~/.local/share/gnome-shell/extensions/hello@behrang.org || exit
glib-compile-schemas schemas/

# Also install schemas globally for "See Details" button to work
mkdir -p ~/.local/share/glib-2.0/schemas
cp schemas/org.gnome.shell.extensions.wsmatrix.gschema.xml ~/.local/share/glib-2.0/schemas/
glib-compile-schemas ~/.local/share/glib-2.0/schemas/

echo "✅ Extension installed!"
echo ""
echo "📋 Next steps:"
echo "1. Restart GNOME Shell (log out/in for Wayland, Alt+F2 'r' for X11)"
echo "2. Enable: gnome-extensions enable hello@behrang.org"
echo "3. Test: gnome-extensions prefs hello@behrang.org"
echo ""
echo "🧪 To test the wraparound fix:"
echo "   - Open preferences and change 'Wraparound mode'"
echo "   - Close and reopen preferences"
echo "   - Should remember your selection!"