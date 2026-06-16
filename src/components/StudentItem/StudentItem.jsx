import { ClipboardList } from 'lucide-react'
import styles from './StudentItem.module.css'

export default function StudentItem({ student, isActive, onSelect }) {
  return (
    <li
      className={`${styles.row} ${isActive ? styles.active : ''}`}
      onClick={() => onSelect(student.id)}
    >
      <span
        className={styles.avatar}
        style={{ background: student.avatar.bg, color: student.avatar.text }}
      >
        {student.initials}
      </span>

      <div className={styles.info}>
        <span className={styles.name}>{student.name}</span>
        <span className={styles.level}>{student.level} · {student.focus}</span>
      </div>

      <button
        className={styles.logBtn}
        onClick={(e) => e.stopPropagation()}
        aria-label={`Log session for ${student.name}`}
      >
        <ClipboardList size={13} strokeWidth={1.75} />
      </button>
    </li>
  )
}
