import { useGameContext } from '@/context/gameContext';
import GameScreen from '../GameScreen';
import ContentScreen from '../ContentScreen';

export default function Game() {
  const { isGameStarted } = useGameContext();
  return (
    <>
      {isGameStarted ? <GameScreen /> : <ContentScreen />}
    </>
  );
}
