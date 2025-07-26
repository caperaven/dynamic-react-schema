import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import ButtonProvider from './ButtonProvider';
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

describe('ButtonProvider', () => {
  it('renders a button with label prop', () => {
    const provider = new ButtonProvider();
    const node = { type: 'Button', props: { label: 'Click me' } };
    const element = provider.parse(node, mockManager);
    const { getByRole } = render(<>{element}</>);
    const button = getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });

  it('renders a button with children if label is not provided', () => {
    const provider = new ButtonProvider();
    const node = { type: 'Button', props: {}, children: [{ type: 'span', props: { children: 'Child Text' } }] };
    const element = provider.parse(node, mockManager);
    const { getByRole } = render(<>{element}</>);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Child Text');
  });

  it('passes additional props to the button', () => {
    const provider = new ButtonProvider();
    const onClick = vi.fn();
    const node = { type: 'Button', props: { label: 'Test', onClick, 'data-testid': 'btn' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const button = getByTestId('btn');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
