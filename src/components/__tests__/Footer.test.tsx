import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../layout/Footer';

const renderFooter = () => {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
};

describe('Footer', () => {
  it('renders the brand logo', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: /gp science tutor/i })).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^about$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^subjects$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^resources$/i })).toBeInTheDocument();
  });

  it('renders service links', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: /math tutoring/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /physics tutoring/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /book a session/i })).toBeInTheDocument();
  });

  it('renders social links with accessible labels', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument();
  });

  it('renders copyright notice', () => {
    renderFooter();
    expect(
      screen.getByText(/gp science tutor\. all rights reserved/i)
    ).toBeInTheDocument();
  });
});
