import { useState, useEffect, useCallback, useRef } from 'react';
import { GAME_STATUS } from '../constants/gameStatus';
import { GAME_CONFIG } from '../constants/config';
import { getRandomPosition } from '../utils/randomPosition';
import { useTimer } from './useTimer';
import { useAutoPlay } from './useAutoPlay';
import { playSound } from '../utils/audio';

export const useGameLogic = () => {
  const [points, setPoints] = useState(5);
  const [circles, setCircles] = useState([]);
  const [next, setNext] = useState(1);
  const [status, setStatus] = useState(GAME_STATUS.IDLE);
  const [autoPlay, setAutoPlay] = useState(false);
  const [gameId, setGameId] = useState(0);
  
  const { time, setTime } = useTimer(status, gameId);
  const statusRef = useRef(status);
  const gameIdRef = useRef(gameId);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    gameIdRef.current = gameId;
  }, [gameId]);

  const startGame = useCallback((customPoints) => {
    const currentPoints = customPoints !== undefined ? customPoints : points;
    setGameId((prev) => prev + 1);
    playSound('START');
    
    const newCircles = Array.from({ length: currentPoints }, (_, i) => {
      const { x, y } = getRandomPosition();
      return {
        id: i + 1,
        x,
        y,
        isClicked: false,
        isFading: false,
        zIndex: currentPoints - i
      };
    });
    
    setCircles(newCircles);
    setNext(1);
    setStatus(GAME_STATUS.PLAYING);
  }, [points]);

  const restartGame = useCallback(() => {
    startGame();
  }, [startGame]);

  const handleCircleClick = useCallback((id) => {
    if (statusRef.current !== GAME_STATUS.PLAYING) return;

    if (id === next) {
      // Đúng node
      playSound('CLICK_CORRECT');
      setCircles((prev) =>
        prev.map((circle) =>
          circle.id === id ? { ...circle, isClicked: true, isFading: true } : circle
        )
      );

      const currentId = gameIdRef.current;
      const isLast = next === points;

      setTimeout(() => {
        if (statusRef.current !== GAME_STATUS.GAME_OVER && gameIdRef.current === currentId) {
          if (isLast) {
            setStatus(GAME_STATUS.WIN);
            playSound('WIN');
            setCircles([]);
          } else {
            setCircles((prev) => prev.filter((circle) => circle.id !== id));
          }
        }
      }, GAME_CONFIG.FADE_DURATION);

      setNext((prev) => prev + 1);
    } else {
      // Sai node
      playSound('CLICK_WRONG');
      setStatus(GAME_STATUS.GAME_OVER);
    }
  }, [next, points]);

  // Sử dụng hook Auto Play đã tách riêng
  useAutoPlay(autoPlay, status, next, circles, handleCircleClick);

  const toggleAutoPlay = () => {
    setAutoPlay((prev) => !prev);
  };

  return {
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
  };
};
