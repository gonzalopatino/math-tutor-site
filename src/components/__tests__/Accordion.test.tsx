import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from '../ui/Accordion';

const mockItems = [
  { id: '1', question: 'Question 1', answer: 'Answer 1' },
  { id: '2', question: 'Question 2', answer: 'Answer 2' },
  { id: '3', question: 'Question 3', answer: 'Answer 3' },
];

describe('Accordion', () => {
  it('renders all accordion items', () => {
    render(<Accordion items={mockItems} />);

    expect(screen.getByText('Question 1')).toBeInTheDocument();
    expect(screen.getByText('Question 2')).toBeInTheDocument();
    expect(screen.getByText('Question 3')).toBeInTheDocument();
  });

  it('expands item on click', async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} />);

    const button = screen.getByRole('button', { name: /question 1/i });
    expect(button).toHaveAttribute('aria-expanded', 'false');

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('collapses item on second click', async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} />);

    const button = screen.getByRole('button', { name: /question 1/i });

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('only allows one item open at a time by default', async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} />);

    const button1 = screen.getByRole('button', { name: /question 1/i });
    const button2 = screen.getByRole('button', { name: /question 2/i });

    await user.click(button1);
    expect(button1).toHaveAttribute('aria-expanded', 'true');

    await user.click(button2);
    expect(button1).toHaveAttribute('aria-expanded', 'false');
    expect(button2).toHaveAttribute('aria-expanded', 'true');
  });

  it('allows multiple items open when allowMultiple is true', async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} allowMultiple />);

    const button1 = screen.getByRole('button', { name: /question 1/i });
    const button2 = screen.getByRole('button', { name: /question 2/i });

    await user.click(button1);
    await user.click(button2);

    expect(button1).toHaveAttribute('aria-expanded', 'true');
    expect(button2).toHaveAttribute('aria-expanded', 'true');
  });

  it('toggles with Enter key', async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} />);

    const button = screen.getByRole('button', { name: /question 1/i });
    button.focus();

    await user.keyboard('{Enter}');
    expect(button).toHaveAttribute('aria-expanded', 'true');

    await user.keyboard('{Enter}');
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('toggles with Space key', async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} />);

    const button = screen.getByRole('button', { name: /question 1/i });
    button.focus();

    await user.keyboard(' ');
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('has correct aria attributes', () => {
    render(<Accordion items={mockItems} />);

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toHaveAttribute('aria-expanded');
      expect(button).toHaveAttribute('aria-controls');
    });

    const regions = screen.getAllByRole('region');
    regions.forEach((region) => {
      expect(region).toHaveAttribute('aria-labelledby');
    });
  });
});
