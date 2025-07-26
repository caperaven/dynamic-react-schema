import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import DialogContentTextProvider from './DialogContentTextProvider';
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

describe('DialogContentTextProvider', () => {
  it('renders DialogContentText with children', () => {
    const provider = new DialogContentTextProvider();
    const node = { type: 'DialogContentText', props: { 'data-testid': 'dialog-content-text' }, children: [{ type: 'span', props: { children: 'Dialog Text' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const contentText = getByTestId('dialog-content-text');
    expect(contentText).toBeInTheDocument();
    expect(contentText).toHaveTextContent('Dialog Text');
  });

  it('renders DialogContentText with no children', () => {
    const provider = new DialogContentTextProvider();
    const node = { type: 'DialogContentText', props: { 'data-testid': 'dialog-content-text' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const contentText = getByTestId('dialog-content-text');
    expect(contentText).toBeInTheDocument();
  });
});
