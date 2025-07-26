/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TooltipProvider from './TooltipProvider';
import { render } from '@testing-library/react';

// Tooltip content is rendered on hover, so we test for the trigger element

describe('TooltipProvider', () => {
  it('renders children inside Tooltip', () => {
    const { getByText } = render(
      <TooltipProvider title="Tooltip text">
        <span>Hover me</span>
      </TooltipProvider>
    );
    expect(getByText('Hover me')).toBeInTheDocument();
  });
});
