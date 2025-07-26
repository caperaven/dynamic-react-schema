import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import DrawerProvider from './DrawerProvider';
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

describe('DrawerProvider', () => {
  it('renders Drawer with children and open', () => {
    const provider = new DrawerProvider();
    const node = { type: 'Drawer', props: { open: true, 'data-testid': 'drawer' }, children: [{ type: 'span', props: { children: 'Drawer Content' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const drawer = getByTestId('drawer');
    expect(drawer).toBeInTheDocument();
    expect(drawer).toHaveTextContent('Drawer Content');
  });

  it('renders Drawer with open false', () => {
    const provider = new DrawerProvider();
    const node = { type: 'Drawer', props: { open: false, 'data-testid': 'drawer' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const drawer = getByTestId('drawer');
    expect(drawer).toBeInTheDocument();
  });
});
