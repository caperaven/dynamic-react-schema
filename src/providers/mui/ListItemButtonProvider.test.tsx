import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ListItemButtonProvider from './ListItemButtonProvider';
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

describe('ListItemButtonProvider', () => {
  it('renders a ListItemButton with children', () => {
    const provider = new ListItemButtonProvider();
    const node = { type: 'ListItemButton', props: { 'data-testid': 'list-item-btn' }, children: [{ type: 'span', props: { children: 'Button' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const btn = getByTestId('list-item-btn');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Button');
  });

  it('renders a ListItemButton with no children', () => {
    const provider = new ListItemButtonProvider();
    const node = { type: 'ListItemButton', props: { 'data-testid': 'list-item-btn' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const btn = getByTestId('list-item-btn');
    expect(btn).toBeInTheDocument();
  });
});
