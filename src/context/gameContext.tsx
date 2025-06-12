'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface GameContextType {
  isGameStarted: boolean;
  startGame: () => void;
  endGame: () => void;
}

const GameContext = createContext<GameContextType | null>(null);

export function useGameContext(): GameContextType {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
}

interface GameProviderProps {
  children: ReactNode;
}

export function GameProvider({ children }: GameProviderProps) {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  function startGame() {
    setIsGameStarted(true);
  }

  function endGame() {
    setIsGameStarted(false);
  }

  return (
    <GameContext.Provider value={{ isGameStarted, startGame, endGame }}>
      {children}
    </GameContext.Provider>
  );
}
