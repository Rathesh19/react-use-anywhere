import '@testing-library/jest-dom/extend-expect';

// Polyfill for ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;
