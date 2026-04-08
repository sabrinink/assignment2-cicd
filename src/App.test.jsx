import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('shows my name on the page', () => {
  render(<App />);
  expect(screen.getByText(/Sabrina Johanna Zimmer/i)).toBeInTheDocument();
});