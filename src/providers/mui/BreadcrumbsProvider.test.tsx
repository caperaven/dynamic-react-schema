import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import BreadcrumbsProvider from './BreadcrumbsProvider';
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

describe('BreadcrumbsProvider', () => {
  it('renders Breadcrumbs with children', () => {
    const provider = new BreadcrumbsProvider();
    const node = { type: 'Breadcrumbs', props: { 'data-testid': 'breadcrumbs' }, children: [
      { type: 'span', props: { children: 'Home' } },
      { type: 'span', props: { children: 'Library' } }
    ] };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const breadcrumbs = getByTestId('breadcrumbs');
    expect(breadcrumbs).toBeInTheDocument();
    expect(breadcrumbs).toHaveTextContent('Home');
    expect(breadcrumbs).toHaveTextContent('Library');
  });

  it('renders Breadcrumbs with no children', () => {
    const provider = new BreadcrumbsProvider();
    const node = { type: 'Breadcrumbs', props: { 'data-testid': 'breadcrumbs' } };
    const element = provider.parse(node, mockManager);
    const { getByTestId } = render(<>{element}</>);
    const breadcrumbs = getByTestId('breadcrumbs');
    expect(breadcrumbs).toBeInTheDocument();
  });
});
