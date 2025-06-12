'use client'
import Game from '@/components/game/game';
import { GameProvider } from '@/context/gameContext';

export default function Page() {

  return (
    <GameProvider>
      <Game />
    </GameProvider>
  )

}
