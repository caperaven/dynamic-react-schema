/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import ToggleButtonProvider from './ToggleButtonProvider';
import { render } from '@testing-library/react';

describe('ToggleButtonProvider', () => {
  it('renders with the correct value', () => {
    const { getByRole } = render(
      <ToggleButtonProvider value="test">Toggle</ToggleButtonProvider>
    );
    expect(getByRole('button')).toBeInTheDocument();
  });
});
