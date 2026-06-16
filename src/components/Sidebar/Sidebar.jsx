import StudentItem from '../StudentItem/StudentItem'
import styles from './Sidebar.module.css'

export default function Sidebar({ students, activeStudentId, onSelectStudent }) {
  const activeSessionStudent = students.find((s) => s.isActiveSession)

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <span className={styles.label}>Students</span>
        <button className={styles.addBtn}>
          <span className={styles.addIcon}>+</span>
          Add student
        </button>
      </div>

      <ul className={styles.list}>
        {students.map((student) => (
          <StudentItem
            key={student.id}
            student={student}
            isActive={student.id === activeStudentId}
            onSelect={onSelectStudent}
          />
        ))}
      </ul>

      {activeSessionStudent && (
        <div className={styles.sessionBadge}>
          <span className={styles.greenDot} />
          {activeSessionStudent.name} · active session
        </div>
      )}
    </aside>
  )
}
