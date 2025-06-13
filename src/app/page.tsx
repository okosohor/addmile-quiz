'use client';
import Game from '@/components/Game';
import { GameProvider } from '@/context/gameContext';

export default function Page() {

  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );

}
