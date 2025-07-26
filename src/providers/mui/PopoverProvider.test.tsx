import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PopoverProvider from './PopoverProvider';
import '@testing-library/jest-dom';

// Mock SchemaManager for testing
const mockManager = {
  parseChildren: (children: any) => {
    if (!children) return [];
    if (Array.isArray(children)) {
      return children.map(child => {
        if (typeof child === 'object' && child.type && child.props) {
          return React.createElement(child.type, child.props);
        }
        return child;
      });
    }
    return [children];
  },
} as any;

describe('PopoverProvider', () => {
  it('renders a Popover with children and open', () => {
    const provider = new PopoverProvider();
    const node = { type: 'Popover', props: { open: true, 'data-testid': 'popover' }, children: [{ type: 'span', props: { children: 'Popover Content' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const popover = getByTestId('popover');
    expect(popover).toBeInTheDocument();
    expect(popover).toHaveTextContent('Popover Content');
  });

  it('renders a Popover with default open false', () => {
    const provider = new PopoverProvider();
    const node = { type: 'Popover', props: { 'data-testid': 'popover' }, children: [{ type: 'span', props: { children: 'Closed' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const popover = getByTestId('popover');
    expect(popover).toBeInTheDocument();
    expect(popover).toHaveTextContent('Closed');
  });
});
