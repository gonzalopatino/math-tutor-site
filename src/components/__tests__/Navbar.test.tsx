import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../layout/Navbar';

const renderNavbar = () => {
  return render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
};

describe('Navbar', () => {
  it('renders the brand logo', () => {
    renderNavbar();
    expect(screen.getByRole('link', { name: /gp science tutor/i })).toBeInTheDocument();
  });

  it('renders navigation links in desktop menu', () => {
    renderNavbar();
    // Get desktop nav links (hidden on mobile)
    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    const links = within(nav).getAllByRole('link');

    // Should have brand + nav links + CTA
    expect(links.length).toBeGreaterThanOrEqual(5);
  });

  it('renders book a session CTA button', () => {
    renderNavbar();
    const ctaButtons = screen.getAllByRole('link', { name: /book a session/i });
    expect(ctaButtons.length).toBeGreaterThan(0);
  });

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup();
    renderNavbar();

    const menuButton = screen.getByRole('button', { name: /open menu/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    await user.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    await user.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('toggles mobile menu with keyboard', async () => {
    const user = userEvent.setup();
    renderNavbar();

    const menuButton = screen.getByRole('button', { name: /open menu/i });
    menuButton.focus();

    await user.keyboard('{Enter}');
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    await user.keyboard(' ');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});
