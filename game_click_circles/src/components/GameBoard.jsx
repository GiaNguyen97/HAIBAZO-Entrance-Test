import React from 'react';
import Circle from './Circle';

const GameBoard = ({ circles, handleCircleClick, status }) => {
  return (
    <div
      className="glass-panel"
      style={{
        flex: 1,
        position: 'relative',
      }}
    >
      {circles.map((circle) => (
        <Circle
          key={circle.id}
          id={circle.id}
          x={circle.x}
          y={circle.y}
          isClicked={circle.isClicked}
          isFading={circle.isFading}
          zIndex={circle.zIndex}
          onClick={handleCircleClick}
          status={status}
        />
      ))}
    </div>
  );
};

export default GameBoard;
