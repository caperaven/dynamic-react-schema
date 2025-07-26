import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import IconButtonProvider from './IconButtonProvider';
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

describe('IconButtonProvider', () => {
  it('renders an IconButton with children', () => {
    const provider = new IconButtonProvider();
    const node = { type: 'IconButton', props: { color: 'primary', 'data-testid': 'icon-btn' }, children: [{ type: 'span', props: { children: 'Test Icon' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const iconBtn = getByTestId('icon-btn');
    expect(iconBtn).toBeInTheDocument();
    expect(iconBtn).toHaveTextContent('Test Icon');
  });

  it('renders an IconButton with no children', () => {
    const provider = new IconButtonProvider();
    const node = { type: 'IconButton', props: { 'data-testid': 'icon-btn' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const iconBtn = getByTestId('icon-btn');
    expect(iconBtn).toBeInTheDocument();
  });
});
