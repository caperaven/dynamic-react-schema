import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import GridProvider from './GridProvider';
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

describe('GridProvider', () => {
  it('renders a Grid with children', () => {
    const provider = new GridProvider();
    const node = { type: 'Grid', props: { container: true, 'data-testid': 'grid' }, children: [{ type: 'span', props: { children: 'Test Grid' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const grid = getByTestId('grid');
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveTextContent('Test Grid');
  });

  it('renders a Grid with no children', () => {
    const provider = new GridProvider();
    const node = { type: 'Grid', props: { 'data-testid': 'grid' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const grid = getByTestId('grid');
    expect(grid).toBeInTheDocument();
  });
});
