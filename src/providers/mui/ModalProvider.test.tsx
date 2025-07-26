import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ModalProvider from './ModalProvider';
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

describe('ModalProvider', () => {
  it('renders a Modal with a child', () => {
    const provider = new ModalProvider();
    const node = { type: 'Modal', props: { open: true, 'data-testid': 'modal' }, children: [{ type: 'span', props: { children: 'Modal Content' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const modal = getByTestId('modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent('Modal Content');
  });

  it('renders a Modal with no children', () => {
    const provider = new ModalProvider();
    const node = { type: 'Modal', props: { open: true, 'data-testid': 'modal' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const modal = getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });
});
