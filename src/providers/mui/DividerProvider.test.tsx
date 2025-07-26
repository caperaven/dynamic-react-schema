import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import DividerProvider from './DividerProvider';
import '@testing-library/jest-dom';

describe('DividerProvider', () => {
  it('renders Divider with props', () => {
    const provider = new DividerProvider();
    const node = { type: 'Divider', props: { orientation: 'horizontal', 'data-testid': 'divider' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const divider = getByTestId('divider');
    expect(divider).toBeInTheDocument();
  });
});
