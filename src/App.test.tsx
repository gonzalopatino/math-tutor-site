import { render, screen } from '@testing-library/react';
import App from './App';

// Helper to render App with router
const renderApp = (route = '/') => {
  window.history.pushState({}, 'Test page', route);
  return render(<App />);
};

describe('App', () => {
  it('renders the home page by default', () => {
    renderApp('/');
    expect(
      screen.getByRole('heading', { name: /help your child/i })
    ).toBeInTheDocument();
  });

  it('renders the navbar with brand', () => {
    renderApp('/');
    // There are two brand links (navbar and footer), use getAllBy
    const brandLinks = screen.getAllByRole('link', { name: /gp science tutor/i });
    expect(brandLinks.length).toBeGreaterThanOrEqual(1);
  });

  it('renders the footer', () => {
    renderApp('/');
    expect(
      screen.getByText(/gp science tutor\. all rights reserved/i)
    ).toBeInTheDocument();
  });
});
