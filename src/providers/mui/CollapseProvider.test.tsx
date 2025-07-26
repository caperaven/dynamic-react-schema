import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CollapseProvider from './CollapseProvider';
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

describe('CollapseProvider', () => {
  it('renders Collapse with children', () => {
    const provider = new CollapseProvider();
    const node = { type: 'Collapse', props: { in: true, 'data-testid': 'collapse' }, children: [{ type: 'span', props: { children: 'Collapse Content' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const collapse = getByTestId('collapse');
    expect(collapse).toBeInTheDocument();
    expect(collapse).toHaveTextContent('Collapse Content');
  });

  it('renders Collapse with no children', () => {
    const provider = new CollapseProvider();
    const node = { type: 'Collapse', props: { in: true, 'data-testid': 'collapse' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const collapse = getByTestId('collapse');
    expect(collapse).toBeInTheDocument();
  });
});
