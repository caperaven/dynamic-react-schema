import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CardActionAreaProvider from './CardActionAreaProvider';
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

describe('CardActionAreaProvider', () => {
  it('renders a CardActionArea with children', () => {
    const provider = new CardActionAreaProvider();
    const node = { type: 'CardActionArea', props: { 'data-testid': 'card-action-area' }, children: [{ type: 'span', props: { children: 'Action Content' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const area = getByTestId('card-action-area');
    expect(area).toBeInTheDocument();
    expect(area).toHaveTextContent('Action Content');
  });

  it('renders a CardActionArea with no children', () => {
    const provider = new CardActionAreaProvider();
    const node = { type: 'CardActionArea', props: { 'data-testid': 'card-action-area' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const area = getByTestId('card-action-area');
    expect(area).toBeInTheDocument();
  });
});
