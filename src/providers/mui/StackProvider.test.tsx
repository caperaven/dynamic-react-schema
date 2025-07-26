import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import StackProvider from './StackProvider';
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

describe('StackProvider', () => {
  it('renders a Stack with children', () => {
    const provider = new StackProvider();
    const node = { type: 'Stack', props: { 'data-testid': 'stack' }, children: [{ type: 'span', props: { children: 'Stacked' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const stack = getByTestId('stack');
    expect(stack).toBeInTheDocument();
    expect(stack).toHaveTextContent('Stacked');
  });

  it('renders a Stack with no children', () => {
    const provider = new StackProvider();
    const node = { type: 'Stack', props: { 'data-testid': 'stack' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const stack = getByTestId('stack');
    expect(stack).toBeInTheDocument();
  });
});
