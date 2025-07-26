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
  it('renders a Button with children', () => {
    const provider = new ButtonProvider();
    const node = { type: 'Button', props: { 'data-testid': 'button' }, children: [{ type: 'span', props: { children: 'Click me' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });

  it('renders a Button with no children', () => {
    const provider = new ButtonProvider();
    const node = { type: 'Button', props: { 'data-testid': 'button' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
  });

  it('calls onClick when Button is clicked', () => {
  const provider = new ButtonProvider();
  const onClick = vi.fn();
  const node = { type: 'Button', props: { onClick, 'data-testid': 'button' } };
  const element = provider.parse(node, mockManager);
  const { getByTestId } = render(<>{element}</>);
  const button = getByTestId('button');
  // ButtonProvider renders a MUI Button, which is a button element
  const btn = button.querySelector('button') || button;
  fireEvent.click(btn);
  expect(onClick).toHaveBeenCalled();
  });
});
