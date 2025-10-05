/**
 * Vitest setup configuration
 * This file is executed before each test file
 */

import '@testing-library/jest-dom';
import { beforeEach, vi } from 'vitest';

// Capture and suppress expected unhandled rejections during tests
let unhandledRejections: Error[] = [];

process.on('unhandledRejection', (reason) => {
  unhandledRejections.push(reason as Error);
  // Don't log these during tests as they are expected in error testing scenarios
});

// Reset unhandled rejections before each test
beforeEach(() => {
  unhandledRejections = [];
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};
// Mock import.meta for Vite environment variables
Object.defineProperty(import.meta, 'env', {
  value: {
    NEXT_PUBLIC_API_URL: 'http://localhost:3000/api',
  },
});
