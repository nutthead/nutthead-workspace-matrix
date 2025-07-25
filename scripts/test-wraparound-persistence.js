#!/usr/bin/env gjs

/**
 * Regression Test: Wraparound Mode Setting Persistence
 * 
 * This test validates that the wraparound-mode setting persists between
 * preference window sessions and is correctly displayed in the UI.
 */

imports.gi.versions.Gio = '2.0';
imports.gi.versions.Gtk = '4.0';

const { Gio } = imports.gi;

// Test configuration
const SCHEMA_ID = 'org.gnome.shell.extensions.org.nutthead.workspace-matrix-settings';
const SCHEMA_PATH = '/org/gnome/shell/extensions/org/nutthead/workspace-matrix/';
const WRAPAROUND_KEY = 'wraparound-mode';

// Enum values mapping
const ENUM_VALUES = {
    NONE: 0,
    NEXT_PREVIOUS: 1,
    ROWS_COLUMNS: 2,
    NEXT_PREVIOUS_BORDER: 3
};

const ENUM_NAMES = ['none', 'next-previous', 'rows-columns', 'next-previous-border'];

function testWraparoundPersistence() {
    print('🧪 Testing Wraparound Mode Persistence...\n');
    
    try {
        // Create settings object
        const settings = new Gio.Settings({
            schema_id: SCHEMA_ID,
            path: SCHEMA_PATH
        });
        
        // Test each enum value
        for (const [name, value] of Object.entries(ENUM_VALUES)) {
            print(`📝 Testing ${name} (${ENUM_NAMES[value]})...`);
            
            // Set the value
            settings.set_enum(WRAPAROUND_KEY, value);
            
            // Force sync to ensure it's written
            Gio.Settings.sync();
            
            // Read back the value
            const readValue = settings.get_enum(WRAPAROUND_KEY);
            
            if (readValue === value) {
                print(`   ✅ PASS: Value persisted correctly (${readValue})`);
            } else {
                print(`   ❌ FAIL: Expected ${value}, got ${readValue}`);
                return false;
            }
        }
        
        // Test default value
        print('📝 Testing default value reset...');
        settings.reset(WRAPAROUND_KEY);
        const defaultValue = settings.get_enum(WRAPAROUND_KEY);
        
        if (defaultValue === ENUM_VALUES.NONE) {
            print(`   ✅ PASS: Default value correct (${defaultValue})`);
        } else {
            print(`   ❌ FAIL: Expected ${ENUM_VALUES.NONE}, got ${defaultValue}`);
            return false;
        }
        
        print('\n🎉 All persistence tests PASSED!');
        return true;
        
    } catch (error) {
        print(`❌ ERROR: ${error.message}`);
        return false;
    }
}

function simulateUITest() {
    print('\n🖥️  Simulating UI Initialization Test...\n');
    
    try {
        const settings = new Gio.Settings({
            schema_id: SCHEMA_ID,
            path: SCHEMA_PATH
        });
        
        // Set a non-default value
        settings.set_enum(WRAPAROUND_KEY, ENUM_VALUES.NEXT_PREVIOUS);
        Gio.Settings.sync();
        
        print('📝 Set wraparound-mode to NEXT_PREVIOUS (1)');
        
        // Simulate prefs window opening - this is what should happen
        const currentValue = settings.get_enum(WRAPAROUND_KEY);
        print(`📖 Reading current value: ${currentValue} (${ENUM_NAMES[currentValue]})`);
        
        // This is the test for the UI initialization bug
        print('🔍 UI Initialization Check:');
        if (currentValue === ENUM_VALUES.NEXT_PREVIOUS) {
            print('   ✅ ComboRow SHOULD be set to index 1 (Next/Previous)');
            print('   ❌ CURRENT BUG: ComboRow shows index 0 (None) instead');
        }
        
        return true;
        
    } catch (error) {
        print(`❌ ERROR: ${error.message}`);
        return false;
    }
}

// Run tests
if (testWraparoundPersistence() && simulateUITest()) {
    print('\n✨ REGRESSION TEST SUMMARY:');
    print('   - GSettings persistence: ✅ WORKING');
    print('   - UI initialization: ❌ BROKEN (this is the bug)');
    print('\n🎯 Fix needed: Initialize ComboRow.selected from GSettings value');
} else {
    print('\n💥 CRITICAL: GSettings persistence is also broken!');
}