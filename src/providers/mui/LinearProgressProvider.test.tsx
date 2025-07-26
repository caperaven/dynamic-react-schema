import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import LinearProgressProvider from './LinearProgressProvider';
import '@testing-library/jest-dom';

describe('LinearProgressProvider', () => {
  it('renders a LinearProgress with props', () => {
    const provider = new LinearProgressProvider();
    const node = { type: 'LinearProgress', props: { 'data-testid': 'linear-progress', value: 50, variant: 'determinate' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const progress = getByTestId('linear-progress');
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute('aria-valuenow', '50');
  });
});
