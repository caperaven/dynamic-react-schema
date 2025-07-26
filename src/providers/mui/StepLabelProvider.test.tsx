import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import StepLabelProvider from './StepLabelProvider';
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

describe('StepLabelProvider', () => {
  it('renders a StepLabel with children', () => {
    const provider = new StepLabelProvider();
    const node = { type: 'StepLabel', props: { 'data-testid': 'step-label' }, children: [{ type: 'span', props: { children: 'Step Label' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const label = getByTestId('step-label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Step Label');
  });

  it('renders a StepLabel with no children', () => {
    const provider = new StepLabelProvider();
    const node = { type: 'StepLabel', props: { 'data-testid': 'step-label' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const label = getByTestId('step-label');
    expect(label).toBeInTheDocument();
  });
});
