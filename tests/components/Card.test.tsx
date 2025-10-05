import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Card from '@/components/Card';

describe('Card Component', () => {
  const mockProps = {
    title: 'Test Card',
    description: 'This is a test description',
    imageUrl: '/test-image.svg',
    tags: ['React', 'Testing', 'Vitest']
  };

  it('should render card with correct title', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });

  it('should render card with correct description', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  it('should render all tags', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Testing')).toBeInTheDocument();
    expect(screen.getByText('Vitest')).toBeInTheDocument();
  });

  it('should render image with correct alt text', () => {
    render(<Card {...mockProps} />);
    const image = screen.getByAltText('Test Card');
    expect(image).toBeInTheDocument();
  });

  it('should call onClick when clicked', async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();
    render(<Card {...mockProps} onClick={mockOnClick} />);
    
    const card = screen.getByText('Test Card').closest('div[class*="cursor-pointer"]');
    await user.click(card!);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should not crash without onClick prop', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });
});
