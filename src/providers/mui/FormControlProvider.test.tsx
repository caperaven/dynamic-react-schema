/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import FormControlProvider from './FormControlProvider';
import { render } from '@testing-library/react';

describe('FormControlProvider', () => {
  it('renders children inside FormControl', () => {
    const { getByText } = render(
      <FormControlProvider>Test FormControl</FormControlProvider>
    );
    expect(getByText('Test FormControl')).toBeInTheDocument();
  });
});
