/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import FormGroupProvider from './FormGroupProvider';
import { render } from '@testing-library/react';

describe('FormGroupProvider', () => {
  it('renders children inside FormGroup', () => {
    const { getByText } = render(
      <FormGroupProvider>Test FormGroup</FormGroupProvider>
    );
    expect(getByText('Test FormGroup')).toBeInTheDocument();
  });
});
