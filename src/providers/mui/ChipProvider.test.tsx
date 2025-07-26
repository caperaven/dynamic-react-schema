import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import ChipProvider from './ChipProvider';
import '@testing-library/jest-dom';

describe('ChipProvider', () => {
  it('renders Chip with props', () => {
    const provider = new ChipProvider();
    const node = { type: 'Chip', props: { label: 'Chip', 'data-testid': 'chip' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const chip = getByTestId('chip');
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveTextContent('Chip');
  });

  it('calls onClick when Chip is clicked', () => {
    const provider = new ChipProvider();
    const onClick = vi.fn();
    const node = { type: 'Chip', props: { label: 'Clickable', onClick, 'data-testid': 'chip' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const chip = getByTestId('chip');
    fireEvent.click(chip);
    expect(onClick).toHaveBeenCalled();
  });
});
