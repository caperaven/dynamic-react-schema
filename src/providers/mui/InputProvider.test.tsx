import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import InputProvider from './InputProvider';
import '@testing-library/jest-dom';

describe('InputProvider', () => {
  it('renders an Input with props', () => {
    const provider = new InputProvider();
    const node = { type: 'Input', props: { 'data-testid': 'input', value: 'test value' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const input = getByTestId('input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('test value');
  });
});
