import React from 'react';
import { GAME_STATUS } from '../constants/gameStatus';

const StatusHeader = ({ status }) => {
  const getHeader = () => {
    switch (status) {
      case GAME_STATUS.WIN:
        return <h1 style={{ color: '#51cf66' }}>ALL CLEARED! 🎉</h1>;
      case GAME_STATUS.GAME_OVER:
        return <h1 style={{ color: '#ff6b6b' }}>GAME OVER! 😵</h1>;
      default:
        return <h1>POPPING NODES</h1>;
    }
  };

  return <div className="control-header">{getHeader()}</div>;
};

export default StatusHeader;
