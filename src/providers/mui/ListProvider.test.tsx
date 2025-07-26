import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ListProvider from './ListProvider';
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

describe('ListProvider', () => {
  it('renders a List with children', () => {
    const provider = new ListProvider();
    const node = { type: 'List', props: { 'data-testid': 'list' }, children: [{ type: 'li', props: { children: 'Item 1' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const list = getByTestId('list');
    expect(list).toBeInTheDocument();
    expect(list).toHaveTextContent('Item 1');
  });

  it('renders a List with no children', () => {
    const provider = new ListProvider();
    const node = { type: 'List', props: { 'data-testid': 'list' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const list = getByTestId('list');
    expect(list).toBeInTheDocument();
  });
});
