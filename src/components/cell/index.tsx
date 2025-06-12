import styles from '@/styles/cell.module.css'
import Image from 'next/image'

export default function Cell () {
  return (
    <div className={styles.cell}>
      <div className={styles['cell-line']}></div>
      <Image className={styles['cell-bg']} src='/images/cell.svg' alt='cell' width={240 }height={32}/>
      <p className={styles['cell-text']}>500$</p>
    </div>
  )
}