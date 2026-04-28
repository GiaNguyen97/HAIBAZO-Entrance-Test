import React, { useState, useEffect } from 'react';
import { GAME_STATUS } from '../constants/gameStatus';

const Circle = React.memo(({ id, x, y, isClicked, isFading, zIndex, onClick, status }) => {
  const [countdown, setCountdown] = useState(3.0);
  const size = 54; // Hơi to hơn một chút cho phong cách hoạt hình

  const isGameOver = status === GAME_STATUS.GAME_OVER;

  useEffect(() => {
    let interval;
    if (isClicked && countdown > 0 && !isGameOver) {
      interval = setInterval(() => {
        setCountdown((prev) => Math.max(0, prev - 0.1));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isClicked, countdown, isGameOver]);

  const style = {
    position: 'absolute',
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    cursor: 'pointer',
    zIndex: zIndex,
    transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.2s',
    border: '3px solid #2b3a4a',
    backgroundColor: isClicked ? '#ff6b6b' : '#ffea00',
    color: '#2b3a4a',
    boxShadow: isClicked ? 'none' : '4px 4px 0px 0px rgba(0,0,0,0.1)',
    animation: isFading ? 'fadeOut 3s linear forwards' : 'popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
    animationPlayState: isGameOver ? 'paused' : 'running',
    userSelect: 'none',
  };

  return (
    <div 
      style={style} 
      onClick={() => onClick(id)}
      onMouseEnter={(e) => !isClicked && (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => !isClicked && (e.currentTarget.style.transform = 'scale(1)')}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}>
        <span style={{ fontSize: isClicked ? '0.9rem' : '1.3rem' }}>{id}</span>
        {isClicked && (
          <span style={{ fontSize: '0.65rem', marginTop: '2px', fontWeight: 'bold' }}>
            {countdown.toFixed(1)}s
          </span>
        )}
      </div>
    </div>
  );
});

export default Circle;
