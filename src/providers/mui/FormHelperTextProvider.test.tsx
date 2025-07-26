/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import FormHelperTextProvider from './FormHelperTextProvider';
import { render } from '@testing-library/react';

describe('FormHelperTextProvider', () => {
  it('renders children inside FormHelperText', () => {
    const { getByText } = render(
      <FormHelperTextProvider>Test Helper</FormHelperTextProvider>
    );
    expect(getByText('Test Helper')).toBeInTheDocument();
  });
});
