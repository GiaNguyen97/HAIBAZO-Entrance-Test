import React from 'react';
import { GAME_STATUS } from '../constants/gameStatus';
import StatusHeader from './StatusHeader';

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

  const isPlayingOrWin = status === GAME_STATUS.PLAYING || 
                         status === GAME_STATUS.WIN || 
                         status === GAME_STATUS.GAME_OVER;

  return (
    <div className="cartoon-panel" style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      <StatusHeader status={status} />

      <div className="stats-row">
        <div className="points-input-group">
          <span style={{ fontWeight: '700', fontSize: '1.3rem' }}>POINTS:</span>
          <input
            type="number"
            className="points-input"
            value={points}
            onChange={handlePointsChange}
            disabled={status === GAME_STATUS.PLAYING}
          />
        </div>

        <div className="text-large">
          TIME: <span className="color-blue">{time.toFixed(1)}s</span>
        </div>
      </div>

      <div className="actions-row">
        <div className="button-group">
          <button
            onClick={() => isPlayingOrWin ? restartGame() : startGame()}
            style={{ backgroundColor: '#4dabf7', color: 'white', minWidth: '130px' }}
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

        <div className="text-medium">
          NEXT: <span className="color-red">{next}</span>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
