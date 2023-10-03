import { render, screen } from '@testing-library/react';
import PlayerStatsPage from './PlayerStatsPage';

test('renders learn react link', () => {
  render(<PlayerStatsPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
