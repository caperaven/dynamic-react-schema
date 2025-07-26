import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import StepperProvider from './StepperProvider';
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

describe('StepperProvider', () => {
  it('renders a Stepper with children', () => {
    const provider = new StepperProvider();
    const node = { type: 'Stepper', props: { 'data-testid': 'stepper' }, children: [{ type: 'span', props: { children: 'Step 1' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const stepper = getByTestId('stepper');
    expect(stepper).toBeInTheDocument();
    expect(stepper).toHaveTextContent('Step 1');
  });

  it('renders a Stepper with no children', () => {
    const provider = new StepperProvider();
    const node = { type: 'Stepper', props: { 'data-testid': 'stepper' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const stepper = getByTestId('stepper');
    expect(stepper).toBeInTheDocument();
  });
});
