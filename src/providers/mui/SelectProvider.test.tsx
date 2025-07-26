import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SelectProvider from './SelectProvider';
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

describe('SelectProvider', () => {
  it('renders a Select with children', () => {
    const provider = new SelectProvider();
    const node = { type: 'Select', props: { 'data-testid': 'select' }, children: [{ type: 'option', props: { value: '1', children: 'One' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const select = getByTestId('select');
    expect(select).toBeInTheDocument();
    expect(select).toHaveTextContent('One');
  });

  it('renders a Select with no children', () => {
    const provider = new SelectProvider();
    const node = { type: 'Select', props: { 'data-testid': 'select' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const select = getByTestId('select');
    expect(select).toBeInTheDocument();
  });
});
