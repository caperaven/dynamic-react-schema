import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import InputLabelProvider from './InputLabelProvider';
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

describe('InputLabelProvider', () => {
  it('renders an InputLabel with children', () => {
    const provider = new InputLabelProvider();
    const node = { type: 'InputLabel', props: { 'data-testid': 'input-label' }, children: [{ type: 'span', props: { children: 'Label' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const label = getByTestId('input-label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Label');
  });

  it('renders an InputLabel with no children', () => {
    const provider = new InputLabelProvider();
    const node = { type: 'InputLabel', props: { 'data-testid': 'input-label' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const label = getByTestId('input-label');
    expect(label).toBeInTheDocument();
  });
});
