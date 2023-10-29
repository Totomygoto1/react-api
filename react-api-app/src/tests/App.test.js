import { render, screen } from '@testing-library/react';
import MovieData1 from './App';

test('Title is working', () => {
  render(<MovieData1 />);
  const linkElement = screen.getByText(/fellowship of the ring/i);
  expect(linkElement).toBeInTheDocument();
});
