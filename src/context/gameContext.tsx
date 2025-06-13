'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface GameContextType {
  isGameStarted: boolean;
  startGame: () => void;
  endGame: () => void;
  isGameFinished: boolean;
  finishGame: () => void;
  currentQuestionIndex: number;
  setCurrentQuestion: (_index: number) => void;
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
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  function startGame() {
    setIsGameStarted(true);
  }

  function endGame() {
    setIsGameStarted(false);
    setCurrentQuestionIndex(0);
    setIsGameFinished(false);
  }

  function finishGame(){
    setIsGameFinished(true);
  }

  function setCurrentQuestion(index: number) {
    setCurrentQuestionIndex(index);
  }

  return (
    <GameContext.Provider value={{ 
      isGameStarted, 
      startGame, 
      endGame,
      currentQuestionIndex,
      setCurrentQuestion,
      isGameFinished,
      finishGame,
    }}>
      {children}
    </GameContext.Provider>
  );
}
