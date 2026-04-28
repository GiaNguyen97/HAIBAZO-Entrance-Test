import React from 'react';
import { useGameLogic } from './hooks/useGameLogic';
import ControlPanel from './components/ControlPanel';
import GameBoard from './components/GameBoard';

function App() {
  const {
    points,
    setPoints,
    circles,
    next,
    status,
    time,
    autoPlay,
    startGame,
    restartGame,
    handleCircleClick,
    toggleAutoPlay
  } = useGameLogic();

  return (
    <>
      <ControlPanel
        status={status}
        time={time}
        points={points}
        setPoints={setPoints}
        startGame={startGame}
        restartGame={restartGame}
        autoPlay={autoPlay}
        toggleAutoPlay={toggleAutoPlay}
        next={next}
      />
      <GameBoard circles={circles} handleCircleClick={handleCircleClick} status={status} />
    </>
  );
}

export default App;
