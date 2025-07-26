import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import CheckboxProvider from './CheckboxProvider';
import '@testing-library/jest-dom';

describe('CheckboxProvider', () => {
  it('renders Checkbox with props', () => {
    const provider = new CheckboxProvider();
    const node = { type: 'Checkbox', props: { checked: true, 'data-testid': 'checkbox' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const checkbox = getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });

  it('calls onChange when Checkbox is clicked', () => {
    const provider = new CheckboxProvider();
    const onChange = vi.fn();
    const node = { type: 'Checkbox', props: { checked: false, onChange, 'data-testid': 'checkbox' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const checkbox = getByTestId('checkbox');
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalled();
  });
});
