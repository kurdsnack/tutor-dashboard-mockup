import { useState } from 'react'
import { students } from './data/students'
import Sidebar from './components/Sidebar/Sidebar'
import PreviewPanel from './components/PreviewPanel/PreviewPanel'
import ChatSection from './components/ChatSection/ChatSection'
import styles from './App.module.css'

export default function App() {
  const [activeStudentId, setActiveStudentId] = useState(students[0].id)
  const [outputType, setOutputType] = useState('lesson-plan')

  const activeStudent = students.find((s) => s.id === activeStudentId)

  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <Sidebar
          students={students}
          activeStudentId={activeStudentId}
          onSelectStudent={setActiveStudentId}
        />
        <main className={styles.main}>
          <PreviewPanel activeStudent={activeStudent} outputType={outputType} />
          <ChatSection
            activeStudent={activeStudent}
            outputType={outputType}
            onOutputTypeChange={setOutputType}
          />
        </main>
      </div>
    </div>
  )
}
