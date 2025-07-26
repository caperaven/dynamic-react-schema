import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import MenuListProvider from './MenuListProvider';
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

describe('MenuListProvider', () => {
  it('renders a MenuList with children', () => {
    const provider = new MenuListProvider();
    const node = { type: 'MenuList', props: { 'data-testid': 'menu-list' }, children: [{ type: 'li', props: { children: 'List Item' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const list = getByTestId('menu-list');
    expect(list).toBeInTheDocument();
    expect(list).toHaveTextContent('List Item');
  });

  it('renders a MenuList with no children', () => {
    const provider = new MenuListProvider();
    const node = { type: 'MenuList', props: { 'data-testid': 'menu-list' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const list = getByTestId('menu-list');
    expect(list).toBeInTheDocument();
  });
});
