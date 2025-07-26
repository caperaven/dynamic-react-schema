import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import FabProvider from './FabProvider';
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

describe('FabProvider', () => {
  it('renders a Fab with children', () => {
    const provider = new FabProvider();
    const node = { type: 'Fab', props: { color: 'primary', 'data-testid': 'fab' }, children: [{ type: 'span', props: { children: 'Test Fab' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const fab = getByTestId('fab');
    expect(fab).toBeInTheDocument();
    expect(fab).toHaveTextContent('Test Fab');
  });

  it('renders a Fab with no children', () => {
    const provider = new FabProvider();
    const node = { type: 'Fab', props: { 'data-testid': 'fab' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const fab = getByTestId('fab');
    expect(fab).toBeInTheDocument();
  });
});
