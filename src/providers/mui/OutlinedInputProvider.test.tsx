/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import OutlinedInputProvider from './OutlinedInputProvider';
import { render } from '@testing-library/react';

describe('OutlinedInputProvider', () => {
  it('renders with the correct placeholder', () => {
    const { getByPlaceholderText } = render(
      <OutlinedInputProvider placeholder="Test Placeholder" />
    );
    expect(getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });
});
