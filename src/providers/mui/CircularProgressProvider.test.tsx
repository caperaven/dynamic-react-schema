import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CircularProgressProvider from './CircularProgressProvider';
import '@testing-library/jest-dom';

describe('CircularProgressProvider', () => {
  it('renders CircularProgress with props', () => {
    const provider = new CircularProgressProvider();
    const node = { type: 'CircularProgress', props: { color: 'primary', 'data-testid': 'circular-progress' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const progress = getByTestId('circular-progress');
    expect(progress).toBeInTheDocument();
  });
});
