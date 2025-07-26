import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import DialogTitleProvider from './DialogTitleProvider';
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

describe('DialogTitleProvider', () => {
  it('renders DialogTitle with children', () => {
    const provider = new DialogTitleProvider();
    const node = { type: 'DialogTitle', props: { 'data-testid': 'dialog-title' }, children: [{ type: 'span', props: { children: 'Dialog Title' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const title = getByTestId('dialog-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Dialog Title');
  });

  it('renders DialogTitle with no children', () => {
    const provider = new DialogTitleProvider();
    const node = { type: 'DialogTitle', props: { 'data-testid': 'dialog-title' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const title = getByTestId('dialog-title');
    expect(title).toBeInTheDocument();
  });
});
