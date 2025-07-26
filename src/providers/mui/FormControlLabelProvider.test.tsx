/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import FormControlLabelProvider from './FormControlLabelProvider';
import { render } from '@testing-library/react';

describe('FormControlLabelProvider', () => {
  it('renders with the correct label', () => {
    const { getByLabelText } = render(
      <FormControlLabelProvider control={<input type="checkbox" />} label="Test Label" />
    );
    expect(getByLabelText('Test Label')).toBeInTheDocument();
  });
});
