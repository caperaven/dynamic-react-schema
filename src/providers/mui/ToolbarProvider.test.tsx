/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import ToolbarProvider from './ToolbarProvider';
import { render } from '@testing-library/react';

describe('ToolbarProvider', () => {
  it('renders children inside Toolbar', () => {
    const { getByText } = render(
      <ToolbarProvider>Test Toolbar</ToolbarProvider>
    );
    expect(getByText('Test Toolbar')).toBeInTheDocument();
  });
});
