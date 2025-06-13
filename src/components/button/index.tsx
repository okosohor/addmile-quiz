import styles from '@/styles/button.module.css';

interface Props {
  text: string;
  handleButtonClick: () => void;
}

export default function Button({ text, handleButtonClick }: Props) {
  function handleClick () {
    handleButtonClick();
  }
  
  return (
    <div>
      <button onClick={handleClick} className={styles.button}>{text}</button>
    </div>
  );
}
