'use client';
import Game from '@/components/Game/game';
import { GameProvider } from '@/context/gameContext';

export default function Page() {

  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );

}
