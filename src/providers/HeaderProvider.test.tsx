import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import HeaderProvider from './HeaderProvider';
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

describe('HeaderProvider', () => {
  it('renders a header with text prop', () => {
    const provider = new HeaderProvider();
    const node = { type: 'Header', props: { text: 'Hello World' } };
    const element = provider.parse(node, mockManager);
    const { getByRole } = render(<>{element}</>);
    const header = getByRole('heading', { name: 'Hello World' });
    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe('H1');
  });

  it('renders a header with children if text is not provided', () => {
    const provider = new HeaderProvider();
    const node = { type: 'Header', props: {}, children: [{ type: 'span', props: { children: 'Child Text' } }] };
    const element = provider.parse(node, mockManager);
    const { getByRole } = render(<>{element}</>);
    const header = getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Child Text');
  });

  it('renders text and children together if both are provided', () => {
    const provider = new HeaderProvider();
    const node = { type: 'Header', props: { text: 'Title: ' }, children: [{ type: 'span', props: { children: 'Subtitle' } }] };
    const element = provider.parse(node, mockManager);
    const { getByRole } = render(<>{element}</>);
    const header = getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Title: Subtitle');
  });

  it('passes additional props to the header', () => {
    const provider = new HeaderProvider();
    const node = { type: 'Header', props: { text: 'Styled', 'data-testid': 'header', className: 'my-header' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const header = getByTestId('header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('my-header');
  });
});
