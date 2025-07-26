/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import ToggleButtonGroupProvider from './ToggleButtonGroupProvider';
import { render } from '@testing-library/react';

describe('ToggleButtonGroupProvider', () => {
  it('renders with the correct value', () => {
    const { container } = render(
      <ToggleButtonGroupProvider value="test" exclusive onChange={() => {}} />
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
