import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import RadioGroupProvider from './RadioGroupProvider';
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

describe('RadioGroupProvider', () => {
  it('renders a RadioGroup with children', () => {
    const provider = new RadioGroupProvider();
    const node = { type: 'RadioGroup', props: { 'data-testid': 'radio-group' }, children: [{ type: 'span', props: { children: 'Radio 1' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const group = getByTestId('radio-group');
    expect(group).toBeInTheDocument();
    expect(group).toHaveTextContent('Radio 1');
  });

  it('renders a RadioGroup with no children', () => {
    const provider = new RadioGroupProvider();
    const node = { type: 'RadioGroup', props: { 'data-testid': 'radio-group' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const group = getByTestId('radio-group');
    expect(group).toBeInTheDocument();
  });
});
