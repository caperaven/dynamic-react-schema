import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SnackbarProvider from './SnackbarProvider';
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

describe('SnackbarProvider', () => {
  it('renders a Snackbar with a child', () => {
    const provider = new SnackbarProvider();
    const node = { type: 'Snackbar', props: { open: true, 'data-testid': 'snackbar' }, children: [{ type: 'span', props: { children: 'Snackbar Content' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const snackbar = getByTestId('snackbar');
    expect(snackbar).toBeInTheDocument();
    expect(snackbar).toHaveTextContent('Snackbar Content');
  });

  it('renders a Snackbar with no children', () => {
    const provider = new SnackbarProvider();
    const node = { type: 'Snackbar', props: { open: true, 'data-testid': 'snackbar' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const snackbar = getByTestId('snackbar');
    expect(snackbar).toBeInTheDocument();
  });
});
