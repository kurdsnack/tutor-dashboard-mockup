# components/ — Context

## Rules for all components

### Co-location
Each component lives in its own folder with a matching CSS Module:
```
ComponentName/
  ComponentName.jsx
  ComponentName.module.css
  CONTEXT.md
```

### Props pattern
- Accept only what you need — no prop spreading.
- Callback props prefixed with `on*` (e.g. `onSelect`).
- Internal handlers prefixed with `handle*` (e.g. `handleClick`).

### CSS Modules
- Class names are camelCase: `.studentRow`, `.activeState`.
- Use `clsx` or template literals for conditional classes — avoid inline style except for dynamic avatar colors.
- All colors/spacing via CSS custom properties from `tokens.css`.

### No logic
These are presentational mockup components. No API calls, no complex business logic, no side effects beyond basic useState for UI state (hover, focus).

## Component responsibilities

| Component | Responsibility |
|---|---|
| `Sidebar` | Sidebar shell, "STUDENTS" header, Add Student btn, student list, active session badge |
| `StudentItem` | Single student row: avatar circle, name + level line, log icon, active highlight |
| `PreviewPanel` | Topbar (label + 3 action buttons) + renders PreviewCard |
| `PreviewCard` | Full lesson plan card: title, sections, skeleton lines, tag pills |
| `ChatSection` | Bottom strip: output type select, context pill, textarea, send button |

## Hierarchy
```
App
├── Sidebar
│   └── StudentItem (×4, mapped from students array)
└── main (flex column)
    ├── PreviewPanel
    │   └── PreviewCard
    └── ChatSection
```
