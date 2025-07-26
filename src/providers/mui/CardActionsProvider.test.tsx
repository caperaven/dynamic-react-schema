import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CardActionsProvider from './CardActionsProvider';
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

describe('CardActionsProvider', () => {
  it('renders CardActions with children', () => {
    const provider = new CardActionsProvider();
    const node = { type: 'CardActions', props: { 'data-testid': 'card-actions' }, children: [
      { type: 'span', props: { children: 'Action1' } },
      { type: 'span', props: { children: 'Action2' } }
    ] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const actions = getByTestId('card-actions');
    expect(actions).toBeInTheDocument();
    expect(actions).toHaveTextContent('Action1');
    expect(actions).toHaveTextContent('Action2');
  });

  it('renders CardActions with no children', () => {
    const provider = new CardActionsProvider();
    const node = { type: 'CardActions', props: { 'data-testid': 'card-actions' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const actions = getByTestId('card-actions');
    expect(actions).toBeInTheDocument();
  });
});
