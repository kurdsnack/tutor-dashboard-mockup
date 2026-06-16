# src/ — Context

## Entry points
- `main.jsx` — Vite entry. Imports global CSS then mounts `<App />` into `#root`. Keep it minimal.
- `App.jsx` — Root layout. Owns `activeStudentId` and `outputType` state. Renders the two-column split (Sidebar + main column). The main column stacks PreviewPanel and ChatSection vertically with `flex: 1` and `overflow: hidden`.

## Layout shell
App wrapper gets:
- `border-radius: var(--border-radius-lg)`
- `overflow: hidden`
- `border: 0.5px solid var(--color-border-tertiary)`
- Fixed height (e.g. `calc(100vh - 48px)`) so the inner columns can scroll independently

The two-column flex container inside:
- Sidebar: `width: 200px; flex-shrink: 0`
- Main: `flex: 1; display: flex; flex-direction: column`

## Import order convention
1. React imports
2. Component imports
3. Data imports
4. Style imports (CSS Modules last)
