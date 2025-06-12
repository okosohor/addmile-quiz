import { useGameContext } from '@/context/gameContext';
import GameScreen from '../gameScreen';
import ContentScreen from '../contentScreen';

export default function Game() {
  const { isGameStarted } = useGameContext();
  return (
    <>
      {isGameStarted ?
        <GameScreen/>
        :
        <ContentScreen />
      }
    </>
  );
}