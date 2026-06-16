# Tutor Dashboard — Claude Code Brief

## Overview

An AI-powered lesson planning tool for language tutors. The tutor selects a student, types a request in natural language, and receives a generated lesson plan (or other output) in a preview pane. The interface is a single-page app with no routing.

---

## Layout

Two-column split inside a fixed-height container:

```
┌──────────────────────────────────────────────────────┐
│  Sidebar (200px fixed)  │  Main (flex: 1)            │
│                         │                            │
│  [Students label]       │  [Topbar: label + actions] │
│  [Add student btn]      │                            │
│  ─────────────────────  │  [Lesson plan preview card]│
│  [Student list]         │                            │
│    • Ahmed  (active)    │  ─────────────────────── │
│    • Sara               │  [Chat section]            │
│    • Khalid             │    [Output type select]    │
│    • Layla              │    [Context pill]          │
│  ─────────────────────  │    [Textarea + Send btn]   │
│  [Active session badge] │                            │
└──────────────────────────────────────────────────────┘
```

- Sidebar: fixed `200px` width, `border-right`, background slightly offset from main
- Main: `flex: 1`, split vertically between preview panel (scrollable, `flex: 1`) and chat section (fixed bottom strip)
- Entire app: `border-radius: lg`, `overflow: hidden`, `border: 0.5px` on outer wrapper

---

## Components

### Sidebar

**Header**
- "STUDENTS" uppercase label (11px, tertiary color, letter-spacing)
- "Add student" button: dashed border, icon + text, full width, subtle hover

**Student List** (`overflow-y: auto`, padded)

Each student row contains:
- Colored avatar circle (initials, 28px) — unique background/foreground per student
- Name (13px, primary) + level/context line (11px, tertiary), e.g. `B1 · Sales`
- Log session icon button (right-aligned, appears on hover or always visible)
- Active state: subtle border + background fill

**Active Session Badge** (pinned to bottom of sidebar)
- Green dot + `"Ahmed · active session"` text in 11px

---

### Main — Preview Panel

**Topbar**
- "LESSON PLAN PREVIEW" label (uppercase, 11px)
- Three action buttons (right-aligned):
  - Regenerate (icon + label)
  - Open in Google (icon + label)
  - Download (icon + label, slightly stronger border = "primary")

**Preview Card**
- Full-width card with border and padding
- Title: student name + level + topic, e.g. `B1 Lesson Plan — Sales Vocabulary · Ahmed`
- Sections with uppercase 11px section titles and placeholder lines (skeleton UI):
  - Objectives
  - Warm-up (10 min)
  - Main activity (25 min)
  - Focus areas from last session → rendered as colored tag pills

**Skeleton lines** simulate content loading:
- Heights: 10px, border-radius: 4px, background: secondary
- Widths: `.full` (100%), `.med` (80%), `.short` (60%)

**Tag pills** (inline, rounded-full, colored):
- Amber: e.g. "Negotiation phrases"
- Teal: e.g. "Follow-up emails"
- Purple: e.g. "Conditionals"

---

### Main — Chat Section

Pinned to the bottom of the main column, `border-top`.

**Controls row**
- `<select>` dropdown for output type: Lesson plan / Slide deck / Worksheet / Assessment / Progress report
- Context pill showing active student + level (e.g. `Ahmed · B1 · Sales`) with a user icon

**Input row**
- `<textarea>` (2 rows, resizable: none) with placeholder prompt example
- Send button: 34×34px, filled background (text-primary color), up-arrow icon, rounded

---

## Color System

Uses CSS custom properties throughout — no hardcoded hex except avatar/tag accent colors:

| Token | Usage |
|---|---|
| `--color-background-primary` | Main panel bg, active student bg, cards |
| `--color-background-secondary` | Sidebar bg, inputs, select, skeleton lines |
| `--color-text-primary` | Student names, card titles, send btn icon |
| `--color-text-secondary` | Add-btn text, action buttons, section context |
| `--color-text-tertiary` | Labels, level lines, log button |
| `--color-border-primary` | Download btn, focused input |
| `--color-border-secondary` | Add-btn dashed, action btns, input default |
| `--color-border-tertiary` | Outer app border, dividers, card borders |
| `--border-radius-md` | Buttons, inputs, select |
| `--border-radius-lg` | App wrapper, preview card |
| `--font-sans` | All text |

**Avatar accent colors** (hardcoded, one per student):
- Purple: `bg #EEEDFE / text #3C3489`
- Teal: `bg #E1F5EE / text #085041`
- Coral: `bg #FAECE7 / text #712B13`
- Blue: `bg #E6F1FB / text #0C447C`

**Tag pill colors** match avatar palette (amber added for tags: `bg #FAEEDA / text #633806`).

---

## Interactivity (to implement)

- **Student selection**: clicking a student sets it as `active` (border + bg), updates context pill and preview card header, clears or swaps preview content
- **Log session button**: opens a session log modal or panel for that student
- **Output type select**: switching changes the preview card structure (lesson plan vs worksheet vs assessment, etc.)
- **Chat input + send**: on submit, calls the AI API with the textarea content + active student context; streams or displays the result in the preview card
- **Regenerate button**: re-runs the last request
- **Open in Google / Download**: export actions on the current preview content
- **Add student**: opens a form/modal to add a new student to the list

---

## AI Integration

The chat section drives content generation via the Anthropic API:

- System prompt should include: student name, CEFR level, focus area, output type selected
- User message: the textarea content
- Response populates the preview card with real structured content (replacing skeleton UI)
- The output type dropdown controls what kind of document is generated and how the preview card is structured

---

## File Structure (suggested)

```
/
├── index.html
├── style.css          # or co-located in component files
├── app.js             # or framework of choice
└── components/
    ├── Sidebar.js
    ├── StudentItem.js
    ├── PreviewPanel.js
    ├── PreviewCard.js
    └── ChatSection.js
```

Framework choice is open — the mockup is plain HTML/CSS and can be built with vanilla JS, React, or Vue without structural changes.
