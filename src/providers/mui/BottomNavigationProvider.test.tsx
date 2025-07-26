import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import BottomNavigationProvider from './BottomNavigationProvider';
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

describe('BottomNavigationProvider', () => {
  it('renders a BottomNavigation with children', () => {
    const provider = new BottomNavigationProvider();
    const node = { type: 'BottomNavigation', props: { 'data-testid': 'bottom-nav' }, children: [{ type: 'span', props: { children: 'Nav Item' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const nav = getByTestId('bottom-nav');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveTextContent('Nav Item');
  });

  it('renders a BottomNavigation with no children', () => {
    const provider = new BottomNavigationProvider();
    const node = { type: 'BottomNavigation', props: { 'data-testid': 'bottom-nav' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const nav = getByTestId('bottom-nav');
    expect(nav).toBeInTheDocument();
  });
});
