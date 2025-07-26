/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TextFieldProvider from './TextFieldProvider';
import { render } from '@testing-library/react';

describe('TextFieldProvider', () => {
  it('renders with the correct label', () => {
    const { getByLabelText } = render(
      <TextFieldProvider label="Test Label" />
    );
    expect(getByLabelText('Test Label')).toBeInTheDocument();
  });
});
