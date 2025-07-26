/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableFooterCellProvider from './TableFooterCellProvider';
import { render } from '@testing-library/react';

describe('TableFooterCellProvider', () => {
  it('renders children inside TableFooterCell', () => {
    const { getByText } = render(
      <TableFooterCellProvider>Test TableFooterCell</TableFooterCellProvider>
    );
    expect(getByText('Test TableFooterCell')).toBeInTheDocument();
  });
});
