import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ContainerProvider from './ContainerProvider';
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

describe('ContainerProvider', () => {
  it('renders Container with children', () => {
    const provider = new ContainerProvider();
    const node = { type: 'Container', props: { 'data-testid': 'container' }, children: [{ type: 'span', props: { children: 'Container Content' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const container = getByTestId('container');
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent('Container Content');
  });

  it('renders Container with no children', () => {
    const provider = new ContainerProvider();
    const node = { type: 'Container', props: { 'data-testid': 'container' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const container = getByTestId('container');
    expect(container).toBeInTheDocument();
  });
});
