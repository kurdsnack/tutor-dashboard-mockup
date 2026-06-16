import { RefreshCw, ExternalLink, Download } from 'lucide-react'
import PreviewCard from '../PreviewCard/PreviewCard'
import styles from './PreviewPanel.module.css'

export default function PreviewPanel({ activeStudent, outputType }) {
  return (
    <div className={styles.panel}>
      <div className={styles.topbar}>
        <span className={styles.label}>Lesson Plan Preview</span>
        <div className={styles.actions}>
          <button className={styles.actionBtn}>
            <RefreshCw size={12} strokeWidth={2} />
            Regenerate
          </button>
          <button className={styles.actionBtn}>
            <ExternalLink size={12} strokeWidth={2} />
            Open in Google
          </button>
          <button className={`${styles.actionBtn} ${styles.primary}`}>
            <Download size={12} strokeWidth={2} />
            Download
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <PreviewCard activeStudent={activeStudent} />
      </div>
    </div>
  )
}
