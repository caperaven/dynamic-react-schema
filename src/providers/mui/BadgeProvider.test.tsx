import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import BadgeProvider from './BadgeProvider';
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

describe('BadgeProvider', () => {
  it('renders a Badge with children and badgeContent', () => {
    const provider = new BadgeProvider();
    const node = { type: 'Badge', props: { badgeContent: 4, color: 'primary', 'data-testid': 'badge' }, children: [{ type: 'span', props: { children: 'Inbox' } }] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const badge = getByTestId('badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent('Inbox');
  });

  it('renders a Badge with no children', () => {
    const provider = new BadgeProvider();
    const node = { type: 'Badge', props: { badgeContent: 2, 'data-testid': 'badge' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const badge = getByTestId('badge');
    expect(badge).toBeInTheDocument();
  });
});
