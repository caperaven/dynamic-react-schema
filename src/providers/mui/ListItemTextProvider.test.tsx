import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ListItemTextProvider from './ListItemTextProvider';
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

describe('ListItemTextProvider', () => {
  it('renders a ListItemText with children', () => {
    const provider = new ListItemTextProvider();
    const node = { type: 'ListItemText', props: { 'data-testid': 'list-item-text' }, children: [{ type: 'span', props: { children: 'Text' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const text = getByTestId('list-item-text');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('Text');
  });

  it('renders a ListItemText with no children', () => {
    const provider = new ListItemTextProvider();
    const node = { type: 'ListItemText', props: { 'data-testid': 'list-item-text' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const text = getByTestId('list-item-text');
    expect(text).toBeInTheDocument();
  });
});
