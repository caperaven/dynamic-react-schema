/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TablePaginationProvider from './TablePaginationProvider';
import { render } from '@testing-library/react';

describe('TablePaginationProvider', () => {
  it('renders TablePagination', () => {
    const { getByRole } = render(
      <TablePaginationProvider count={10} page={0} onPageChange={() => {}} rowsPerPage={5} onRowsPerPageChange={() => {}} />
    );
    expect(getByRole('button', { name: /next page/i })).toBeInTheDocument();
  });
});
