import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import DialogProvider from './DialogProvider';
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

describe('DialogProvider', () => {
  it('renders Dialog with children and open', () => {
    const provider = new DialogProvider();
    const node = { type: 'Dialog', props: { open: true, 'data-testid': 'dialog' }, children: [{ type: 'span', props: { children: 'Dialog Content' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const dialog = getByTestId('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveTextContent('Dialog Content');
  });

  it('renders Dialog with open false', () => {
    const provider = new DialogProvider();
    const node = { type: 'Dialog', props: { open: false, 'data-testid': 'dialog' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const dialog = getByTestId('dialog');
    expect(dialog).toBeInTheDocument();
  });
});
