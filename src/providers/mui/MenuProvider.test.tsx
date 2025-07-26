import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import MenuProvider from './MenuProvider';
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

describe('MenuProvider', () => {
  it('renders a Menu with children and open', () => {
    const provider = new MenuProvider();
    const node = { type: 'Menu', props: { open: true, 'data-testid': 'menu' }, children: [{ type: 'span', props: { children: 'Menu Item' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const menu = getByTestId('menu');
    expect(menu).toBeInTheDocument();
    expect(menu).toHaveTextContent('Menu Item');
  });

  it('renders a Menu with default open false', () => {
    const provider = new MenuProvider();
    const node = { type: 'Menu', props: { 'data-testid': 'menu' }, children: [{ type: 'span', props: { children: 'Closed' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const menu = getByTestId('menu');
    expect(menu).toBeInTheDocument();
    expect(menu).toHaveTextContent('Closed');
  });
});
