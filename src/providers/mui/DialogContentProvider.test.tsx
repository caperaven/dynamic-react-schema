import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import DialogContentProvider from './DialogContentProvider';
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

describe('DialogContentProvider', () => {
  it('renders DialogContent with children', () => {
    const provider = new DialogContentProvider();
    const node = { type: 'DialogContent', props: { 'data-testid': 'dialog-content' }, children: [{ type: 'span', props: { children: 'Dialog Content' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const content = getByTestId('dialog-content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent('Dialog Content');
  });

  it('renders DialogContent with no children', () => {
    const provider = new DialogContentProvider();
    const node = { type: 'DialogContent', props: { 'data-testid': 'dialog-content' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const content = getByTestId('dialog-content');
    expect(content).toBeInTheDocument();
  });
});
