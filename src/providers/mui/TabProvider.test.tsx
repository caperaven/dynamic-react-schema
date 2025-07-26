import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import TabProvider from './TabProvider';
import '@testing-library/jest-dom';

describe('TabProvider', () => {
  it('renders a Tab with props', () => {
    const provider = new TabProvider();
    const node = { type: 'Tab', props: { label: 'Tab 1', 'data-testid': 'tab' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const tab = getByTestId('tab');
    expect(tab).toBeInTheDocument();
    expect(tab).toHaveTextContent('Tab 1');
  });
});
