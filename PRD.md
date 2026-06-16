# Tutor Dashboard — Product Requirements Document

> **Status:** In progress
> **Stack:** React + Vite + CSS Modules → GitHub Pages
> **Scope:** Visual mockup only — no API calls, no auth, no persistence

---

## 1. Product Summary

A single-page mockup of an AI-powered lesson planning tool for language tutors. The tutor selects a student from a sidebar, types a natural-language request in a chat strip, and the resulting lesson plan (or other output type) appears in a preview panel. The interface is a fixed-height two-column shell with no routing.

**Purpose of this build:** Demonstrate the visual design and interaction feel to stakeholders. Functional AI integration is out of scope.

---

## 2. Goals

- Deliver a polished, pixel-perfect dark-mode UI that looks production-ready
- Implement click interactions for student selection and output type switching
- Show animated shimmer skeleton in the preview card (simulates content loading)
- Be deployable on GitHub Pages from a single `npm run build`

## 3. Non-Goals

- No API calls (Anthropic or otherwise)
- No routing or multi-page navigation
- No authentication
- No data persistence
- No mobile responsiveness (desktop-first, min-width ~800px)

---

## 4. Design System

### 4.1 Aesthetic Direction

**Target feel:** Linear / Raycast — ultra-clean dark mode, tight spacing, subtle borders, no decorative noise. Every element earns its place.

**Style category (from ui-ux-pro-max):** Dark Mode (OLED)
- Deep near-black backgrounds, high-contrast text, no white background ever
- Subtle borders instead of shadows for depth
- Minimal glow effects only where meaningful (e.g., active session green dot)
- Smooth transitions 150–300ms — never instant, never slow

**Anti-patterns to avoid:**
- Emojis used as icons — use Lucide React SVG icons throughout
- Flat design without any depth — use border + slight bg fill for hierarchy
- Harsh animations or scale transforms that shift layout
- Neon glow / cyberpunk aesthetics — stay minimal

### 4.2 Color Tokens

Defined in `src/styles/tokens.css` on `:root`. Never hardcode hex in component CSS.

| Token | Value | Usage |
|---|---|---|
| `--color-background-primary` | `#141414` | Main panel, preview card, chat section |
| `--color-background-secondary` | `#1c1c1c` | Sidebar, inputs, select, skeleton lines |
| `--color-text-primary` | `#f0f0f0` | Student names, card titles, send btn icon |
| `--color-text-secondary` | `#a0a0a0` | Action buttons, secondary labels |
| `--color-text-tertiary` | `#606060` | 11px uppercase labels, level lines, log icon |
| `--color-border-primary` | `#4a4a4a` | Download btn border, focused input border |
| `--color-border-secondary` | `#2e2e2e` | Add-btn dashed, action btns, input default |
| `--color-border-tertiary` | `#222222` | Outer app border, dividers, card borders |
| `--border-radius-md` | `6px` | Buttons, inputs, select, student rows |
| `--border-radius-lg` | `12px` | App wrapper, preview card |
| `--font-sans` | `'Inter', system-ui, sans-serif` | All text |

**Hardcoded accent colors** (not tokens — applied via inline style from `students.js`):

| Role | Background | Text | Used for |
|---|---|---|---|
| Purple | `#EEEDFE` | `#3C3489` | Ahmed's avatar, "Conditionals" tag |
| Teal | `#E1F5EE` | `#085041` | Sara's avatar, "Follow-up emails" tag |
| Coral | `#FAECE7` | `#712B13` | Khalid's avatar |
| Blue | `#E6F1FB` | `#0C447C` | Layla's avatar |
| Amber | `#FAEEDA` | `#633806` | "Negotiation phrases" tag |

> These light-mode pill/avatar colors pop intentionally against the dark background — do not darken them.

### 4.3 Typography

**Pairing:** Fira Code + Fira Sans (ui-ux-pro-max "Dashboard Data" recommendation — Mono + Sans, dashboard/analytics mood)

| Token | Font | Usage |
|---|---|---|
| `--font-mono` | `'Fira Code', monospace` | 11px uppercase section labels, level indicators, badge text |
| `--font-sans` | `'Fira Sans', system-ui, sans-serif` | All other UI text — names, buttons, inputs, card title |

**Google Fonts import (in `index.html`):**
```
https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Fira+Sans:wght@300;400;500;600;700&display=swap
```

**Scale:**

| Use | Font | Size | Weight | Color |
|---|---|---|---|---|
| Section labels (uppercase) | Fira Code | 11px | 500 | `--color-text-tertiary` |
| Student level / sub-labels | Fira Code | 11px | 400 | `--color-text-tertiary` |
| Active session badge | Fira Code | 11px | 400 | `--color-text-secondary` |
| Student names / action btns | Fira Sans | 13px | 400 | `--color-text-primary` / secondary |
| Card title | Fira Sans | 14px | 600 | `--color-text-primary` |
| Textarea / select / pill | Fira Sans | 12–13px | 400 | various |

> No large display type. This is a dense utility UI — keep font sizes tight.

**Letter-spacing:** `0.08em` on all 11px Fira Code uppercase labels.

### 4.4 Iconography

Use **Lucide React** for all icons. No emojis. Install when coding begins:
```
npm install lucide-react
```

Suggested icons:
| Element | Lucide icon |
|---|---|
| Add student | `Plus` |
| Log session | `ExternalLink` or `ClipboardList` |
| Regenerate | `RefreshCw` |
| Open in Google | `ExternalLink` |
| Download | `Download` |
| Send button | `ArrowUp` |
| Context pill user | `User` |

---

## 5. Layout Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│  App wrapper (border-radius: lg, border: 0.5px tertiary, overflow)  │
│                                                                      │
│  ┌──────────────────┐  ┌───────────────────────────────────────────┐│
│  │  Sidebar (200px) │  │  main (flex: 1, flex-direction: column)  ││
│  │                  │  │                                           ││
│  │  STUDENTS label  │  │  ┌─────────────────────────────────────┐ ││
│  │  Add student btn │  │  │  PreviewPanel (flex: 1, overflow-y) │ ││
│  │  ─────────────── │  │  │  Topbar (border-bottom)             │ ││
│  │  StudentItem ×4  │  │  │  ─────────────────────────────────  │ ││
│  │  ─────────────── │  │  │  PreviewCard (padded)               │ ││
│  │  Session badge   │  │  └─────────────────────────────────────┘ ││
│  │                  │  │  ┌─────────────────────────────────────┐ ││
│  │                  │  │  │  ChatSection (flex-shrink: 0)       │ ││
│  │                  │  │  │  Controls row                       │ ││
│  │                  │  │  │  Input row                          │ ││
│  │                  │  │  └─────────────────────────────────────┘ ││
│  └──────────────────┘  └───────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────────────┘
```

**Key constraints:**
- Entire app: `max-width: 960px`, `height: calc(100vh - 48px)`, centered on a dark body
- Sidebar never scrolls horizontally; its student list scrolls vertically
- PreviewPanel scrolls; ChatSection never scrolls
- `overflow: hidden` on the wrapper clips border-radius correctly

---

## 6. Component Specifications

### 6.1 Sidebar

| Element | Spec |
|---|---|
| Width | `200px` fixed |
| Background | `--color-background-secondary` |
| Border | `border-right: 1px solid --color-border-tertiary` |
| "STUDENTS" label | 11px, uppercase, letter-spacing, `--color-text-tertiary` |
| "Add student" button | Full width, dashed border `--color-border-secondary`, icon + text, `border-radius-md`, hover: `rgba(255,255,255,0.04)` bg |
| Student list | `overflow-y: auto`, `flex: 1`, `padding: 4px 8px` |
| Active session badge | `border-top: 1px solid --color-border-tertiary`, green dot `#22c55e` 8px, 11px text |

### 6.2 StudentItem

| Element | Spec |
|---|---|
| Row | `display: flex`, `align-items: center`, `gap: 10px`, `padding: 6px 8px`, `border-radius-md`, `cursor: pointer` |
| Avatar | 28×28px circle, initials 11px 600 weight, bg/text from `student.avatar` (inline style) |
| Name | 13px, `--color-text-primary` |
| Level line | 11px, `--color-text-tertiary`, format: `"B1 · Sales"` |
| Log icon | `margin-left: auto`, Lucide icon, `--color-text-tertiary`, hover: `--color-text-secondary` |
| Active state | `background: rgba(255,255,255,0.06)`, `border: 1px solid --color-border-secondary` |
| Inactive hover | `background: rgba(255,255,255,0.04)`, `border: 1px solid transparent` |

### 6.3 PreviewPanel — Topbar

| Element | Spec |
|---|---|
| Label | "LESSON PLAN PREVIEW", 11px uppercase, `--color-text-tertiary` |
| Action buttons | 3 buttons: Regenerate, Open in Google, Download |
| Base button style | `font-size: 12px`, `padding: 5px 10px`, `border-radius-md`, `border: 1px solid --color-border-secondary`, color: `--color-text-secondary`, hover: `rgba(255,255,255,0.04)` |
| Download button | Overrides border to `--color-border-primary`, color to `--color-text-primary` |

### 6.4 PreviewCard

| Element | Spec |
|---|---|
| Card | `border: 1px solid --color-border-tertiary`, `border-radius-lg`, `padding: 20px` |
| Title | `"B1 Lesson Plan — Sales Vocabulary · Ahmed"`, 14px, 600 weight |
| Sections | Objectives, Warm-up (10 min), Main activity (25 min), Focus areas |
| Section label | 11px uppercase, `--color-text-tertiary`, `letter-spacing: 0.08em` |
| Section divider | `border-top: 1px solid --color-border-tertiary` between sections |
| Skeleton lines | Heights 10px, `border-radius: 4px`, shimmer animation (see below) |
| Widths | `.full` 100%, `.med` 80%, `.short` 60% |
| Tag pills | `border-radius: 9999px`, 11px, 500 weight, inline accent colors |

**Shimmer animation:**
```css
background: linear-gradient(
  90deg,
  var(--color-background-secondary) 25%,
  #2a2a2a 50%,
  var(--color-background-secondary) 75%
);
background-size: 800px 100%;
animation: shimmer 1.6s infinite linear;
```
`@keyframes shimmer` defined in `src/styles/global.css`.

### 6.5 ChatSection

| Element | Spec |
|---|---|
| Container | `border-top: 1px solid --color-border-tertiary`, `padding: 14px 20px`, `flex-shrink: 0` |
| Output select | 12px, `border-radius-md`, bg: `--color-background-secondary`, border: `--color-border-secondary` |
| Options | Lesson plan, Slide deck, Worksheet, Assessment, Progress report |
| Context pill | User icon + `"Ahmed · B1 · Sales"`, `border-radius: 9999px`, bg: secondary, border: secondary |
| Textarea | `rows=2`, no resize, 13px, focus border: `--color-border-primary` |
| Placeholder | `"Plan a vocabulary warm-up for Ahmed's next Sales session..."` (dynamic per student) |
| Send button | 34×34px, `border-radius-md`, bg: `--color-text-primary`, icon color: `--color-background-primary`, hover: `opacity: 0.85` |

---

## 7. Interaction Model

### State (lives in `App.jsx`)

| State | Type | Default | Drives |
|---|---|---|---|
| `activeStudentId` | `string` | `'ahmed'` | Active StudentItem highlight, PreviewCard title, context pill, textarea placeholder |
| `outputType` | `string` | `'lesson-plan'` | Select value in ChatSection (card content doesn't change yet) |

### Interactions

| Action | Result |
|---|---|
| Click StudentItem | Sets `activeStudentId` → active highlight moves, card title + context pill + placeholder update |
| Change output type select | Sets `outputType` (visible in select; card content does not change in mockup) |
| Click "Add student" | No-op (visual only) |
| Click log icon | No-op (visual only) |
| Click Regenerate / Open / Download | No-op (visual only) |
| Click Send button | No-op (visual only) |

---

## 8. Mock Data

Four students, fixed. See `src/data/students.js`.

| Name | Level | Focus | Avatar | Active session |
|---|---|---|---|---|
| Ahmed | B1 | Sales | Purple | Yes |
| Sara | A2 | Travel | Teal | No |
| Khalid | B2 | Tech | Coral | No |
| Layla | C1 | Academic | Blue | No |

Preview card always shows Ahmed's content regardless of active student selection in this mockup (title updates, skeleton content stays the same — simplification acceptable for mockup scope).

---

## 9. Accessibility (from ui-ux-pro-max checklist)

- All icon-only buttons get `aria-label`
- `cursor: pointer` on all clickable elements
- Hover states use `transition: 150–300ms`
- Focus states visible (`outline` on focused interactive elements)
- `prefers-reduced-motion`: wrap shimmer animation in `@media (prefers-reduced-motion: no-preference)`
- Color is not the only active-state indicator (border + bg fill, not just color)

---

## 10. Deliverables Checklist

### Structure
- [x] Folder structure + CLAUDE.md + CONTEXT.md files
- [x] Git initialized, initial commit
- [x] Vite + React scaffold + CSS tokens
- [x] Mock data (`students.js`)
- [x] Stub component files

### To build (when coding begins)
- [ ] `tokens.css` — finalize dark palette values
- [ ] `global.css` — shimmer keyframe, resets, scrollbar
- [ ] `Sidebar` — header, list, session badge
- [ ] `StudentItem` — avatar, info, log icon, active/hover states
- [ ] `PreviewPanel` — topbar with Lucide icons
- [ ] `PreviewCard` — shimmer skeleton + tag pills
- [ ] `ChatSection` — select, context pill, textarea, send btn
- [ ] `App.jsx` — state wiring, layout shell
- [ ] Replace placeholder text icons (↺ ↗ ↓ ↑) with Lucide SVGs
- [ ] Install `lucide-react` and swap in real icons
- [ ] Visual QA pass (spacing, contrast, hover states)
- [ ] GitHub Pages deploy test

---

## 11. File Map Quick Reference

```
src/
  App.jsx                    ← state + layout shell
  styles/tokens.css          ← all CSS custom properties
  styles/global.css          ← resets + shimmer keyframe
  data/students.js           ← 4 mock students
  components/
    Sidebar/                 ← sidebar shell + badge
    StudentItem/             ← single student row
    PreviewPanel/            ← topbar + renders PreviewCard
    PreviewCard/             ← card, skeleton, pills
    ChatSection/             ← controls + input strip
```

See `CLAUDE.md` for full naming conventions and token reference.
