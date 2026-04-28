import { useEffect } from 'react';
import { GAME_STATUS } from '../constants/gameStatus';
import { GAME_CONFIG } from '../constants/config';

export const useAutoPlay = (enabled, status, next, circles, onCircleClick) => {
  useEffect(() => {
    let timeout;
    
    if (enabled && status === GAME_STATUS.PLAYING) {
      // Tìm node chính xác cần click tiếp theo
      const target = circles.find((c) => c.id === next && !c.isClicked);
      
      if (target) {
        timeout = setTimeout(() => {
          onCircleClick(next);
        }, GAME_CONFIG.AUTO_PLAY_INTERVAL);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [enabled, status, next, circles, onCircleClick]);
};
