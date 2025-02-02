# Button Component

## Purpose
Provides consistent, reusable button styles and behaviors across the website. Implemented as a Web Component for maximum reusability and encapsulation.

## Implementation Status

### Phase 1: Basic Structure ✓
- [x] Create basic button HTML structure
- [x] Document existing button styles from the website
- [x] Create button variants (primary, secondary)

### Phase 2: Features ✓
- [x] Add hover states
- [x] Add disabled states
- [x] Add loading states
- [x] Add icon support

### Phase 3: Integration ✓
- [x] Test in different contexts
- [x] Document usage examples
- [x] Verify accessibility

## Component Structure
```
Button/
├── button.js        # Main component implementation
├── example.html     # Usage examples and testing
└── README.md        # This documentation
```

## Usage

### Basic Button
```html
<custom-button>Click Me</custom-button>
```

### Button Variants
```html
<!-- Primary (default) -->
<custom-button>Primary Button</custom-button>

<!-- Secondary -->
<custom-button variant="secondary">Secondary Button</custom-button>
```

### Size Variants
```html
<custom-button size="sm">Small</custom-button>
<custom-button size="md">Medium</custom-button>
<custom-button size="lg">Large</custom-button>
```

### With Icons
```html
<custom-button icon='<svg>...</svg>'>With Icon</custom-button>
```

### Disabled State
```html
<custom-button disabled>Disabled Button</custom-button>
```

### Link Button
```html
<custom-button href="/some/path">Link Button</custom-button>
```

## Properties

| Property  | Type      | Default   | Description                                    |
|-----------|-----------|-----------|------------------------------------------------|
| variant   | string    | 'primary' | Button style variant ('primary', 'secondary')  |
| size      | string    | 'md'      | Button size ('sm', 'md', 'lg')               |
| href      | string    | '#'       | URL for link buttons                          |
| disabled  | boolean   | false     | Disables the button when true                 |
| icon      | string    | null      | SVG markup for button icon                    |

## Styling

The component uses Shadow DOM for style encapsulation. Styles include:
- Gradient backgrounds
- Hover effects with transform and shadow
- Proper icon alignment
- Responsive sizing
- Disabled state styling

## Testing Checklist ✓
- [x] Visual consistency
- [x] Hover states
- [x] Click events
- [x] Mobile responsiveness
- [x] Accessibility
- [x] Cross-browser compatibility

## Notes
- Uses Web Components for maximum compatibility
- Maintains existing button styles from the website
- Follows accessibility best practices
- Supports both text and icon buttons
- Implements Shadow DOM for style encapsulation

## Current Usage Examples
Currently used in:
- Hero section CTA buttons
- Form submit buttons
- Navigation buttons

## Implementation Notes
- Will maintain existing button styles during migration
- Will ensure backward compatibility
- Will follow accessibility best practices
- Will support both text and icon buttons

## Testing Checklist
- [ ] Visual consistency
- [ ] Hover states
- [ ] Click events
- [ ] Mobile responsiveness
- [ ] Accessibility
- [ ] Cross-browser compatibility 