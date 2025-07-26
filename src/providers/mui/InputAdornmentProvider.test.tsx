import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import InputAdornmentProvider from './InputAdornmentProvider';
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

describe('InputAdornmentProvider', () => {
  it('renders an InputAdornment with children and position', () => {
    const provider = new InputAdornmentProvider();
    const node = { type: 'InputAdornment', props: { position: 'end', 'data-testid': 'adornment' }, children: [{ type: 'span', props: { children: 'Adornment' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const adornment = getByTestId('adornment');
    expect(adornment).toBeInTheDocument();
    expect(adornment).toHaveTextContent('Adornment');
  });

  it('renders an InputAdornment with default position', () => {
    const provider = new InputAdornmentProvider();
    const node = { type: 'InputAdornment', props: { 'data-testid': 'adornment' }, children: [{ type: 'span', props: { children: 'Default' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const adornment = getByTestId('adornment');
    expect(adornment).toBeInTheDocument();
    expect(adornment).toHaveTextContent('Default');
  });
});
