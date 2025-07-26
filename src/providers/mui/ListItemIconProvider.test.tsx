import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ListItemIconProvider from './ListItemIconProvider';
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

describe('ListItemIconProvider', () => {
  it('renders a ListItemIcon with children', () => {
    const provider = new ListItemIconProvider();
    const node = { type: 'ListItemIcon', props: { 'data-testid': 'list-item-icon' }, children: [{ type: 'span', props: { children: 'Icon' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const icon = getByTestId('list-item-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveTextContent('Icon');
  });

  it('renders a ListItemIcon with no children', () => {
    const provider = new ListItemIconProvider();
    const node = { type: 'ListItemIcon', props: { 'data-testid': 'list-item-icon' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const icon = getByTestId('list-item-icon');
    expect(icon).toBeInTheDocument();
  });
});
