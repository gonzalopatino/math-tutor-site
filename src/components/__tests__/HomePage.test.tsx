import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../../pages/HomePage';

const renderHomePage = () => {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );
};

describe('HomePage', () => {
  it('renders the hero headline', () => {
    renderHomePage();
    expect(screen.getByRole('heading', { name: /math.*physics.*tutoring/i })).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    renderHomePage();
    const bookButtons = screen.getAllByRole('link', { name: /book/i });
    expect(bookButtons.length).toBeGreaterThan(0);

    expect(screen.getByRole('link', { name: /ask a question/i })).toBeInTheDocument();
  });

  it('renders problem-solution section', () => {
    renderHomePage();
    expect(
      screen.getByRole('heading', { name: /common challenges i help solve/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/struggling in algebra or geometry class/i)).toBeInTheDocument();
  });

  it('renders subjects section', () => {
    renderHomePage();
    expect(screen.getByRole('heading', { name: /what i tutor/i })).toBeInTheDocument();
    // Check for the subject card titles
    expect(screen.getByRole('heading', { name: /georgia math courses/i })).toBeInTheDocument();
  });

  it('renders testimonials section', () => {
    renderHomePage();
    expect(screen.getByRole('heading', { name: /what parents say/i })).toBeInTheDocument();
  });

  it('renders FAQ section', () => {
    renderHomePage();
    expect(
      screen.getByRole('heading', { name: /frequently asked questions/i }),
    ).toBeInTheDocument();
  });
});
