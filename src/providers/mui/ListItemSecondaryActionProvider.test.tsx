import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ListItemSecondaryActionProvider from './ListItemSecondaryActionProvider';
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

describe('ListItemSecondaryActionProvider', () => {
  it('renders a ListItemSecondaryAction with children', () => {
    const provider = new ListItemSecondaryActionProvider();
    const node = { type: 'ListItemSecondaryAction', props: { 'data-testid': 'list-item-action' }, children: [{ type: 'span', props: { children: 'Action' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const action = getByTestId('list-item-action');
    expect(action).toBeInTheDocument();
    expect(action).toHaveTextContent('Action');
  });

  it('renders a ListItemSecondaryAction with no children', () => {
    const provider = new ListItemSecondaryActionProvider();
    const node = { type: 'ListItemSecondaryAction', props: { 'data-testid': 'list-item-action' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const action = getByTestId('list-item-action');
    expect(action).toBeInTheDocument();
  });
});
