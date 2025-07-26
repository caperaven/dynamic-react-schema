import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SkeletonProvider from './SkeletonProvider';
import '@testing-library/jest-dom';

describe('SkeletonProvider', () => {
  it('renders a Skeleton with props', () => {
    const provider = new SkeletonProvider();
    const node = { type: 'Skeleton', props: { variant: 'rectangular', width: 100, height: 20, 'data-testid': 'skeleton' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });
});
