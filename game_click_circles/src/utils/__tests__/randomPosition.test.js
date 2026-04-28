import { describe, it, expect } from 'vitest';
import { getRandomPosition } from '../randomPosition';
import { GAME_CONFIG } from '../../constants/config';

describe('getRandomPosition', () => {
  it('nên trả về tọa độ nằm trong vùng an toàn (SAFE_ZONE)', () => {
    for (let i = 0; i < 100; i++) {
      const { x, y } = getRandomPosition();
      
      expect(x).toBeGreaterThanOrEqual(GAME_CONFIG.MIN_COORDINATE);
      expect(x).toBeLessThanOrEqual(GAME_CONFIG.MIN_COORDINATE + GAME_CONFIG.MAX_COORDINATE_RANGE);
      
      expect(y).toBeGreaterThanOrEqual(GAME_CONFIG.MIN_COORDINATE);
      expect(y).toBeLessThanOrEqual(GAME_CONFIG.MIN_COORDINATE + GAME_CONFIG.MAX_COORDINATE_RANGE);
    }
  });
});
