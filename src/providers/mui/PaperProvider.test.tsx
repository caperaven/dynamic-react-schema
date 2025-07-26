import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PaperProvider from './PaperProvider';
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

describe('PaperProvider', () => {
  it('renders a Paper with children', () => {
    const provider = new PaperProvider();
    const node = { type: 'Paper', props: { 'data-testid': 'paper' }, children: [{ type: 'span', props: { children: 'Paper Content' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const paper = getByTestId('paper');
    expect(paper).toBeInTheDocument();
    expect(paper).toHaveTextContent('Paper Content');
  });

  it('renders a Paper with no children', () => {
    const provider = new PaperProvider();
    const node = { type: 'Paper', props: { 'data-testid': 'paper' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const paper = getByTestId('paper');
    expect(paper).toBeInTheDocument();
  });
});
