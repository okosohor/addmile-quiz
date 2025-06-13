import style from '@/styles/levelsBlock.module.css'
import Cell from '@/components/cell';
import questions from '@/data/questions';

interface Props {
  currentQuestionIndex: number;
}

export default function LevelsInfo({ currentQuestionIndex }:Props) {
  return (
    <div className={style.container}>
      {questions.map((question, i) =>  (
        <Cell 
          index={i} 
          currentQuestionIndex={currentQuestionIndex} 
          key={question.id}
          price={question.price}
        />
      ),
      )}
    </div>
  );
}