# Header Component

## Purpose
Main navigation header component that provides site-wide navigation and branding.

## Structure
```
Header/
├── index.html          # Main component file
├── Navigation/         # Navigation subcomponent
├── MobileMenu/        # Mobile menu subcomponent
└── README.md          # This documentation
```

## Current Status
- Using existing header.html during migration
- Planned split into Navigation and MobileMenu subcomponents
- Maintaining backward compatibility

## Usage
```html
<!-- Include the header component -->
<include src="/components/layout/Header/index.html">
```

## Dependencies
- Original header.html (during migration)
- Navigation component (planned)
- MobileMenu component (planned)
- Tailwind CSS for styling

## Migration Plan
1. Create parallel structure
2. Split into subcomponents
3. Test thoroughly
4. Switch references gradually

## Notes
- Maintains existing functionality during migration
- Will be split into smaller, more manageable components
- Uses absolute paths for includes 