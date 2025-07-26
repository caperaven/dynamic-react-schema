import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import StepProvider from './StepProvider';
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

describe('StepProvider', () => {
  it('renders a Step with children', () => {
    const provider = new StepProvider();
    const node = { type: 'Step', props: { 'data-testid': 'step' }, children: [{ type: 'span', props: { children: 'Step Content' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const step = getByTestId('step');
    expect(step).toBeInTheDocument();
    expect(step).toHaveTextContent('Step Content');
  });

  it('renders a Step with no children', () => {
    const provider = new StepProvider();
    const node = { type: 'Step', props: { 'data-testid': 'step' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const step = getByTestId('step');
    expect(step).toBeInTheDocument();
  });
});
