import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CssBaselineProvider from './CssBaselineProvider';
import '@testing-library/jest-dom';

describe('CssBaselineProvider', () => {
  it('renders CssBaseline with props', () => {
    const provider = new CssBaselineProvider();
    const node = { type: 'CssBaseline', props: { 'data-testid': 'css-baseline' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const cssBaseline = getByTestId('css-baseline');
    expect(cssBaseline).toBeInTheDocument();
  });
});
