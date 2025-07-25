# GNOME Extensions Anatomy - Version Field Documentation

**Source:** https://gjs.guide/extensions/overview/anatomy.html  
**Fetched:** 2025-07-25  
**Query:** What does the documentation say about the version field in metadata.json? Are there any specific requirements or valid values mentioned?

## Documentation Content

According to the documentation, the `version` field in `metadata.json` has specific requirements:

- It "MUST be a whole number like `1`"
- It "MUST NOT be a semantic version like `1.1` or a string like `"1"`"
- Developers "SHOULD NOT" set this field, as the GNOME Extensions website will override it

The documentation also notes that GNOME Shell may automatically upgrade or downgrade an extension based on this field.

In contrast, the separate `version-name` field is meant to be a user-visible version string, with its own set of requirements (must be a string between 1-16 characters, containing at least one letter or number).