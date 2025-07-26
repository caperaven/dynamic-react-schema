import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import StepButtonProvider from './StepButtonProvider';
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

describe('StepButtonProvider', () => {
  it('renders a StepButton with children', () => {
    const provider = new StepButtonProvider();
    const node = { type: 'StepButton', props: { 'data-testid': 'step-btn' }, children: [{ type: 'span', props: { children: 'Step Button' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const btn = getByTestId('step-btn');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Step Button');
  });

  it('renders a StepButton with no children', () => {
    const provider = new StepButtonProvider();
    const node = { type: 'StepButton', props: { 'data-testid': 'step-btn' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const btn = getByTestId('step-btn');
    expect(btn).toBeInTheDocument();
  });
});
