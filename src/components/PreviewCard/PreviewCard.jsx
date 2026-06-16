import styles from './PreviewCard.module.css'

const TAGS = [
  { label: 'Negotiation phrases', bg: '#FAEEDA', text: '#633806' },
  { label: 'Follow-up emails',    bg: '#E1F5EE', text: '#085041' },
  { label: 'Conditionals',        bg: '#EEEDFE', text: '#3C3489' },
]

const SECTIONS = [
  {
    id: 'objectives',
    label: 'Objectives',
    lines: ['full', 'med', 'short'],
  },
  {
    id: 'warmup',
    label: 'Warm-up (10 min)',
    lines: ['full', 'med'],
  },
  {
    id: 'main',
    label: 'Main activity (25 min)',
    lines: ['full', 'med', 'short'],
  },
]

export default function PreviewCard({ activeStudent }) {
  const title = `${activeStudent.level} Lesson Plan — ${activeStudent.focus} Vocabulary · ${activeStudent.name}`

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>

      {SECTIONS.map((section) => (
        <section key={section.id} className={styles.section}>
          <span className={styles.sectionLabel}>{section.label}</span>
          <div className={styles.lines}>
            {section.lines.map((width, i) => (
              <div key={i} className={`${styles.line} ${styles[width]}`} />
            ))}
          </div>
        </section>
      ))}

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Focus areas from last session</span>
        <div className={styles.pills}>
          {TAGS.map((tag) => (
            <span
              key={tag.label}
              className={styles.pill}
              style={{ background: tag.bg, color: tag.text }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
