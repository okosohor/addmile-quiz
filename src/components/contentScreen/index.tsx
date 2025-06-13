import styles from '@/styles/contentScreen.module.css';
import Image from 'next/image';
import Button from '@/components/button';
import { useGameContext } from '@/context/gameContext';
import questions from '@/data/questions';


export default function ContentScreen() {
  const { isGameStarted, startGame, endGame, currentQuestionIndex } = useGameContext();

  function handleButtonClick () {
    return isGameStarted ? endGame() : startGame();
  }

  const totalScore = questions.slice(0, currentQuestionIndex).reduce((acc, val) => (acc + val.price),0)
  const buttonText = isGameStarted ? 'Try again' : 'Start'
  const contentText = isGameStarted ? `Earned ${totalScore}$`  : 'Who wants to be a millionaire?'



  return (

    <div className={styles.page}>
      <div className={styles.background}/>
      <div className={styles.content}>
        <Image 
          className={styles['content-screen-image']}
          src={'/images/hand.svg'}
          alt="hand"
          height={367}
          width={624}
        />
        <div className={styles['content-info']}>
          <div className={styles['content-text-block']}>
            {isGameStarted && <span className={styles['content-text-secondary']}>Total score:</span>}
            <span className={styles['content-text-main']}>{contentText}</span>
          </div>
          <Button handleButtonClick={handleButtonClick} text={buttonText}/>
        </div>
      </div>
    </div>
  );
}
