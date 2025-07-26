/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import FormLabelProvider from './FormLabelProvider';
import { render } from '@testing-library/react';

describe('FormLabelProvider', () => {
  it('renders children inside FormLabel', () => {
    const { getByText } = render(
      <FormLabelProvider>Test Label</FormLabelProvider>
    );
    expect(getByText('Test Label')).toBeInTheDocument();
  });
});
