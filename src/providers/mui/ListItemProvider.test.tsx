import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ListItemProvider from './ListItemProvider';
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

describe('ListItemProvider', () => {
  it('renders a ListItem with children', () => {
    const provider = new ListItemProvider();
    const node = { type: 'ListItem', props: { 'data-testid': 'list-item' }, children: [{ type: 'span', props: { children: 'Item' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const item = getByTestId('list-item');
    expect(item).toBeInTheDocument();
    expect(item).toHaveTextContent('Item');
  });

  it('renders a ListItem with no children', () => {
    const provider = new ListItemProvider();
    const node = { type: 'ListItem', props: { 'data-testid': 'list-item' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const item = getByTestId('list-item');
    expect(item).toBeInTheDocument();
  });
});
