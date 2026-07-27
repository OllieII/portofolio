import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio at its configured base path', () => {
  window.history.pushState({}, '', '/portfolio/');
  render(<App />);

  expect(screen.getByRole('link', { name: 'Work' })).toBeInTheDocument();
  expect(screen.getByText('Olly Guo')).toBeInTheDocument();
});
