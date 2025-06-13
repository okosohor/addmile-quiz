import styles from '@/styles/cell.module.css'
import cn from 'classnames';

interface Props {
  price: number,
  currentQuestionIndex: number,
  index: number,
}

export default function Cell ({ price, currentQuestionIndex, index }:Props) {
  const isQuestionActive = currentQuestionIndex === index;
  const isQuestionPassed = currentQuestionIndex > index
  const isQuestionNext = currentQuestionIndex < index

  return (
    <div className={cn(
      styles.cell, 
      {
        [styles['active-cell']]: isQuestionActive,
        [styles['passed-cell']]: isQuestionPassed,
      },
    )
    }
    >
      <div className={styles['cell-line']}></div>
      <svg 
        className={styles['cell-bg']} 
        width="240" height="32" 
        viewBox="0 0 240 32" 
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.4941 0.5H218.506C221.289 0.500066 223.971 1.50913 226.06 3.3291L226.47 3.7041L239.277 16L226.47 28.2959C224.328 30.3518 221.475 31.4999 218.506 31.5H21.4941C18.7112 31.4999 16.0294 30.4909 13.9404 28.6709L13.5303 28.2959L0.72168 16L13.5303 3.7041C15.6718 1.6482 18.5255 0.500064 21.4941 0.5Z" fill="white" stroke="currentColor"/>
      </svg>
      <p className={cn(styles['cell-text'], {[styles['cell-text--black']]: isQuestionNext})}>{price}$</p>
    </div>
  )
}