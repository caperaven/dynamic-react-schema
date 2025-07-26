import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ListItemAvatarProvider from './ListItemAvatarProvider';
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

describe('ListItemAvatarProvider', () => {
  it('renders a ListItemAvatar with children', () => {
    const provider = new ListItemAvatarProvider();
    const node = { type: 'ListItemAvatar', props: { 'data-testid': 'list-item-avatar' }, children: [{ type: 'span', props: { children: 'Avatar' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const avatar = getByTestId('list-item-avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveTextContent('Avatar');
  });

  it('renders a ListItemAvatar with no children', () => {
    const provider = new ListItemAvatarProvider();
    const node = { type: 'ListItemAvatar', props: { 'data-testid': 'list-item-avatar' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const avatar = getByTestId('list-item-avatar');
    expect(avatar).toBeInTheDocument();
  });
});
