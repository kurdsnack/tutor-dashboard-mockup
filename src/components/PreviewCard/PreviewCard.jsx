import styles from './PreviewCard.module.css'

const tags = [
  { label: 'Negotiation phrases', bg: '#FAEEDA', text: '#633806' },
  { label: 'Follow-up emails',    bg: '#E1F5EE', text: '#085041' },
  { label: 'Conditionals',        bg: '#EEEDFE', text: '#3C3489' },
]

export default function PreviewCard({ activeStudent }) {
  const title = `${activeStudent.level} Lesson Plan — ${activeStudent.focus} Vocabulary · ${activeStudent.name}`

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Objectives</span>
        <div className={`${styles.line} ${styles.full}`} />
        <div className={`${styles.line} ${styles.med}`} />
        <div className={`${styles.line} ${styles.short}`} />
      </section>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Warm-up (10 min)</span>
        <div className={`${styles.line} ${styles.full}`} />
        <div className={`${styles.line} ${styles.med}`} />
      </section>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Main activity (25 min)</span>
        <div className={`${styles.line} ${styles.full}`} />
        <div className={`${styles.line} ${styles.med}`} />
        <div className={`${styles.line} ${styles.short}`} />
      </section>

      <section className={styles.section}>
        <span className={styles.sectionLabel}>Focus areas from last session</span>
        <div className={styles.pills}>
          {tags.map((tag) => (
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
