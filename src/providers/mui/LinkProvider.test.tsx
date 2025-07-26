import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import LinkProvider from './LinkProvider';
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

describe('LinkProvider', () => {
  it('renders a Link with children', () => {
    const provider = new LinkProvider();
    const node = { type: 'Link', props: { href: 'https://mui.com', 'data-testid': 'link' }, children: [{ type: 'span', props: { children: 'MUI Link' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const link = getByTestId('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('MUI Link');
    expect(link).toHaveAttribute('href', 'https://mui.com');
  });

  it('renders a Link with no children', () => {
    const provider = new LinkProvider();
    const node = { type: 'Link', props: { 'data-testid': 'link' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const link = getByTestId('link');
    expect(link).toBeInTheDocument();
  });
});
