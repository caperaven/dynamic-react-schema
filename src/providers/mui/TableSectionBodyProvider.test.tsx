/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableSectionBodyProvider from './TableSectionBodyProvider';
import { render } from '@testing-library/react';

describe('TableSectionBodyProvider', () => {
  it('renders children inside TableSectionBody', () => {
    const { getByText } = render(
      <TableSectionBodyProvider>Test TableSectionBody</TableSectionBodyProvider>
    );
    expect(getByText('Test TableSectionBody')).toBeInTheDocument();
  });
});
