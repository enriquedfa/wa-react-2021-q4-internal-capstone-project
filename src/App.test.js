import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const header = screen.getByAltText("E Commerce");
  expect(header).toBeInTheDocument();

  const categories = screen.getByText("Categories");
  expect(categories).toBeInTheDocument();

  const featured = screen.getByText("Featured Products");
  expect(featured).toBeInTheDocument();
});
