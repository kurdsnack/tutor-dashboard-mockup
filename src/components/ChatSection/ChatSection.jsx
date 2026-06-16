import styles from './ChatSection.module.css'

const OUTPUT_TYPES = [
  { value: 'lesson-plan',      label: 'Lesson plan' },
  { value: 'slide-deck',       label: 'Slide deck' },
  { value: 'worksheet',        label: 'Worksheet' },
  { value: 'assessment',       label: 'Assessment' },
  { value: 'progress-report',  label: 'Progress report' },
]

export default function ChatSection({ activeStudent, outputType, onOutputTypeChange }) {
  const contextLabel = `${activeStudent.name} · ${activeStudent.level} · ${activeStudent.focus}`
  const placeholder = `Plan a vocabulary warm-up for ${activeStudent.name}'s next ${activeStudent.focus} session...`

  return (
    <div className={styles.section}>
      <div className={styles.controls}>
        <select
          className={styles.select}
          value={outputType}
          onChange={(e) => onOutputTypeChange(e.target.value)}
        >
          {OUTPUT_TYPES.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

        <span className={styles.contextPill}>
          <span className={styles.userIcon}>◉</span>
          {contextLabel}
        </span>
      </div>

      <div className={styles.inputRow}>
        <textarea
          className={styles.textarea}
          rows={2}
          placeholder={placeholder}
        />
        <button className={styles.sendBtn} title="Send">↑</button>
      </div>
    </div>
  )
}
