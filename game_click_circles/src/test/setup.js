import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock audio because jsdom doesn't support HTMLMediaElement well
window.HTMLMediaElement.prototype.play = vi.fn();
window.HTMLMediaElement.prototype.pause = vi.fn();
window.HTMLMediaElement.prototype.load = vi.fn();
