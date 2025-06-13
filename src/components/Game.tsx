import { useGameContext } from '@/context/gameContext';
import GameScreen from '@/components/GameScreen';
import ContentScreen from '@/components/ContentScreen';

export default function Game() {
  const { isGameStarted } = useGameContext();
  return (
    <>
      {isGameStarted ? <GameScreen /> : <ContentScreen />}
    </>
  );
}
