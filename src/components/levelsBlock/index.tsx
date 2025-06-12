import style from '@/styles/levelsBlock.module.css'
import Cell from '@/components/cell';

export default function LevelsInfo() {
  return (
    <div className={style.container}>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
}