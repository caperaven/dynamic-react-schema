import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import BoxProvider from './BoxProvider';
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

describe('BoxProvider', () => {
  it('renders a Box with children', () => {
    const provider = new BoxProvider();
    const node = { type: 'Box', props: { 'data-testid': 'box' }, children: [{ type: 'span', props: { children: 'Box Content' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const box = getByTestId('box');
    expect(box).toBeInTheDocument();
    expect(box).toHaveTextContent('Box Content');
  });

  it('renders a Box with no children', () => {
    const provider = new BoxProvider();
    const node = { type: 'Box', props: { 'data-testid': 'box' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const box = getByTestId('box');
    expect(box).toBeInTheDocument();
  });
});
