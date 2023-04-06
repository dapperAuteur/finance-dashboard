import { render, screen } from '@testing-library/react';
import Custom404 from './../pages/404';

describe('Custom404', () => {
  it('renders the correct heading', () => {
    render(<Custom404 />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent("404 - You're On 3rd Street.");
  });

  it('renders the second heading', () => {
    render(<Custom404 />);
    const heading = screen.getByRole('heading', { level: 1, name: /now get outta here/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the Layout component', () => {
    render(<Custom404 />);
    const layout = screen.getByTestId('layout');
    expect(layout).toBeInTheDocument();
  });
});