/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TypographyProvider from './TypographyProvider';
import { render } from '@testing-library/react';

describe('TypographyProvider', () => {
  it('renders children inside Typography', () => {
    const { getByText } = render(
      <TypographyProvider>Test Typography</TypographyProvider>
    );
    expect(getByText('Test Typography')).toBeInTheDocument();
  });
});
