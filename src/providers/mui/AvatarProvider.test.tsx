import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import AvatarProvider from './AvatarProvider';
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

describe('AvatarProvider', () => {
  it('renders an Avatar with children', () => {
    const provider = new AvatarProvider();
    const node = { type: 'Avatar', props: { 'data-testid': 'avatar' }, children: [{ type: 'span', props: { children: 'A' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const avatar = getByTestId('avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveTextContent('A');
  });

  it('renders an Avatar with no children', () => {
    const provider = new AvatarProvider();
    const node = { type: 'Avatar', props: { 'data-testid': 'avatar' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const avatar = getByTestId('avatar');
    expect(avatar).toBeInTheDocument();
  });
});
