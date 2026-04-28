import React from 'react';
import { GAME_STATUS } from '../constants/gameStatus';

const ControlPanel = ({
  status,
  time,
  points,
  setPoints,
  startGame,
  restartGame,
  autoPlay,
  toggleAutoPlay,
  next
}) => {
  const handlePointsChange = (e) => {
    const val = parseInt(e.target.value) || 0;
    setPoints(val);
  };

  const isPlayingOrWin = status === GAME_STATUS.PLAYING || status === GAME_STATUS.WIN || status === GAME_STATUS.GAME_OVER;

  const headerText = () => {
    switch (status) {
      case GAME_STATUS.WIN:
        return <h1 style={{ color: '#51cf66' }}>ALL CLEARED! 🎉</h1>;
      case GAME_STATUS.GAME_OVER:
        return <h1 style={{ color: '#ff6b6b' }}>GAME OVER! 😵</h1>;
      default:
        return <h1>POPPING NODES</h1>;
    }
  };

  return (
    <div className="cartoon-panel" style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      <div style={{ textAlign: 'center' }}>
        {headerText()}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
          <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>POINTS:</span>
          <input
            type="number"
            value={points}
            onChange={handlePointsChange}
            disabled={status === GAME_STATUS.PLAYING}
            style={{
              padding: '0.5rem',
              borderRadius: '10px',
              border: '3px solid #2b3a4a',
              background: '#f8f9fa',
              color: '#2b3a4a',
              width: '90px',
              fontFamily: 'inherit',
              fontWeight: '700',
              textAlign: 'center',
              fontSize: '1.1rem'
            }}
          />
        </div>

        <div style={{ fontSize: '1.4rem', fontWeight: '700' }}>
          TIME: <span style={{ color: '#4dabf7' }}>{time.toFixed(1)}s</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <button
            onClick={() => isPlayingOrWin ? restartGame() : startGame()}
            style={{
              backgroundColor: '#4dabf7',
              color: 'white',
              minWidth: '130px'
            }}
          >
            {isPlayingOrWin ? 'RESTART' : 'PLAY'}
          </button>
          <button
            onClick={toggleAutoPlay}
            style={{
              backgroundColor: autoPlay ? '#51cf66' : '#ced4da',
              color: autoPlay ? 'white' : '#495057',
              minWidth: '160px'
            }}
          >
            {autoPlay ? 'AUTO: ON' : 'AUTO: OFF'}
          </button>
        </div>

        <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>
          NEXT: <span style={{ color: '#ff6b6b' }}>{next}</span>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
