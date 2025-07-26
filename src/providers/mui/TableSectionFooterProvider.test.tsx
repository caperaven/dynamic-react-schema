/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableSectionFooterProvider from './TableSectionFooterProvider';
import { render } from '@testing-library/react';

describe('TableSectionFooterProvider', () => {
  it('renders children inside TableSectionFooter', () => {
    const { getByText } = render(
      <TableSectionFooterProvider>Test TableSectionFooter</TableSectionFooterProvider>
    );
    expect(getByText('Test TableSectionFooter')).toBeInTheDocument();
  });
});
