import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ButtonGroupProvider from './ButtonGroupProvider';
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

describe('ButtonGroupProvider', () => {
  it('renders a ButtonGroup with children', () => {
    const provider = new ButtonGroupProvider();
    const node = { type: 'ButtonGroup', props: { 'data-testid': 'btn-group' }, children: [
      { type: 'span', props: { children: 'Btn1' } },
      { type: 'span', props: { children: 'Btn2' } }
    ] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const group = getByTestId('btn-group');
    expect(group).toBeInTheDocument();
    expect(group).toHaveTextContent('Btn1');
    expect(group).toHaveTextContent('Btn2');
  });

  it('renders a ButtonGroup with no children', () => {
    const provider = new ButtonGroupProvider();
    const node = { type: 'ButtonGroup', props: { 'data-testid': 'btn-group' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const group = getByTestId('btn-group');
    expect(group).toBeInTheDocument();
  });
});
