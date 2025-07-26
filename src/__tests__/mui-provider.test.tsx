import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { SchemaManager } from '../SchemaManager';

/**
 * These tests verify that the SchemaManager can fall back to rendering
 * Material UI components when no custom provider has been registered for a
 * given type.  We import react-testing-library helpers so that we can
 * render the returned elements into a virtual DOM and query them.
 */
describe('SchemaManager MUI fallback', () => {
  it('renders a Material-UI Button from a schema node', () => {
    const manager = new SchemaManager();
    const schema = {
      type: 'Button',
      props: {
        variant: 'contained',
        children: 'Click me',
      },
    };
    const element = manager.parse(schema);
    // Render the element inside a fragment; this ensures that it is a valid
    // JSX expression for react-testing-library.  Without wrapping the
    // element in a fragment the returned value may be a string or null.
    const { getByRole } = render(<>{element}</>);
    const button = getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });
});
