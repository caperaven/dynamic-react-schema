import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CardContentProvider from './CardContentProvider';
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

describe('CardContentProvider', () => {
  it('renders CardContent with children', () => {
    const provider = new CardContentProvider();
    const node = { type: 'CardContent', props: { 'data-testid': 'card-content' }, children: [
      { type: 'span', props: { children: 'Content1' } },
      { type: 'span', props: { children: 'Content2' } }
    ] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const content = getByTestId('card-content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent('Content1');
    expect(content).toHaveTextContent('Content2');
  });

  it('renders CardContent with no children', () => {
    const provider = new CardContentProvider();
    const node = { type: 'CardContent', props: { 'data-testid': 'card-content' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const content = getByTestId('card-content');
    expect(content).toBeInTheDocument();
  });
});
