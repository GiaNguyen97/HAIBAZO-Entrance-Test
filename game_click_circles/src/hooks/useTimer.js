import { useState, useEffect, useRef } from 'react';
import { GAME_STATUS } from '../constants/gameStatus';

export const useTimer = (status, gameId) => {
  const [time, setTime] = useState(0);
  const requestRef = useRef();
  const startTimeRef = useRef(0);

  const tick = (currentTime) => {
    if (!startTimeRef.current) {
      startTimeRef.current = currentTime;
    }
    const deltaTime = currentTime - startTimeRef.current;
    setTime(deltaTime / 1000);
    requestRef.current = requestAnimationFrame(tick);
  };

  // Reset timer mỗi khi gameId thay đổi (bắt đầu game mới)
  useEffect(() => {
    if (gameId > 0) {
      cancelAnimationFrame(requestRef.current);
      setTime(0);
      startTimeRef.current = 0;
      
      // Nếu game đang ở trạng thái PLAYING, bắt đầu đếm ngay lập tức
      if (status === GAME_STATUS.PLAYING) {
        startTimeRef.current = performance.now();
        requestRef.current = requestAnimationFrame(tick);
      }
    }
  }, [gameId]);

  useEffect(() => {
    if (status === GAME_STATUS.PLAYING) {
      // Chỉ bắt đầu timer nếu nó chưa chạy (tránh trùng lặp khi gameId reset xong)
      if (!requestRef.current) {
        startTimeRef.current = performance.now() - (time * 1000);
        requestRef.current = requestAnimationFrame(tick);
      }
    } else {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = null;
    }

    return () => {
      cancelAnimationFrame(requestRef.current);
      requestRef.current = null;
    };
  }, [status]);

  return { time, setTime };
};
