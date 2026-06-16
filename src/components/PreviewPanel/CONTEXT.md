# PreviewPanel — Context

## Layout
- `flex: 1; overflow-y: auto; display: flex; flex-direction: column`
- Background: `var(--color-background-primary)`
- Contains: Topbar (fixed) + PreviewCard (scrollable content area)

## Topbar
- `display: flex; align-items: center; justify-content: space-between`
- `padding: 14px 20px`
- `border-bottom: 1px solid var(--color-border-tertiary)`
- Does NOT scroll with the card — stick to top

### Left side: label
- "LESSON PLAN PREVIEW" — `font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em`
- Color: `var(--color-text-tertiary)`

### Right side: action buttons (3)
All three share a base style:
- `display: flex; align-items: center; gap: 6px`
- `font-size: 12px; padding: 5px 10px`
- `border-radius: var(--border-radius-md)`
- Color: `var(--color-text-secondary)`

Specific styling:
| Button | Icon | Border | Weight |
|---|---|---|---|
| Regenerate | refresh/loop | `var(--color-border-secondary)` | normal |
| Open in Google | external link | `var(--color-border-secondary)` | normal |
| Download | download/arrow-down | `var(--color-border-primary)` | slightly bolder = "primary" |

## Content area
- `padding: 20px`
- Renders `<PreviewCard />` inside

## Props received from App
- `activeStudent` — full student object (for card title)
- `outputType` — string (currently unused visually, future use)
