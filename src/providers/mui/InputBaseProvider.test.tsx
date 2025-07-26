/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import InputBaseProvider from './InputBaseProvider';
import { render } from '@testing-library/react';

describe('InputBaseProvider', () => {
  it('renders with the correct placeholder', () => {
    const { getByPlaceholderText } = render(
      <InputBaseProvider placeholder="Test Placeholder" />
    );
    expect(getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });
});
