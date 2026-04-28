import React, { useState, useEffect } from 'react';
import { GAME_STATUS } from '../constants/gameStatus';
import { GAME_CONFIG } from '../constants/config';

const Circle = React.memo(({ id, x, y, isClicked, isFading, zIndex, onClick, status }) => {
  const [countdown, setCountdown] = useState(GAME_CONFIG.INITIAL_COUNTDOWN);
  const isGameOver = status === GAME_STATUS.GAME_OVER;

  useEffect(() => {
    let interval;
    if (isClicked && countdown > 0 && !isGameOver) {
      interval = setInterval(() => {
        setCountdown((prev) => Math.max(0, prev - 0.1));
      }, GAME_CONFIG.COUNTDOWN_INTERVAL);
    }
    return () => clearInterval(interval);
  }, [isClicked, countdown, isGameOver]);

  const circleClass = `game-circle ${isClicked ? 'clicked' : 'idle'}`;
  
  const inlineStyle = {
    left: `${x}%`,
    top: `${y}%`,
    width: `${GAME_CONFIG.CIRCLE_SIZE}px`,
    height: `${GAME_CONFIG.CIRCLE_SIZE}px`,
    zIndex: zIndex,
    animationPlayState: isGameOver ? 'paused' : 'running',
  };

  return (
    <div 
      className={circleClass}
      style={inlineStyle} 
      onClick={() => onClick(id)}
      onMouseEnter={(e) => !isClicked && (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => !isClicked && (e.currentTarget.style.transform = 'scale(1)')}
    >
      <div className="game-circle-content">
        <span className="game-circle-id">{id}</span>
        {isClicked && (
          <span className="game-circle-timer">
            {countdown.toFixed(1)}s
          </span>
        )}
      </div>
    </div>
  );
});

export default Circle;
