/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TablePaginationActionsProvider from './TablePaginationActionsProvider';
import { render } from '@testing-library/react';

describe('TablePaginationActionsProvider', () => {
  it('renders TablePagination', () => {
    const { getByRole } = render(
      <TablePaginationActionsProvider count={10} page={0} onPageChange={() => {}} rowsPerPage={5} onRowsPerPageChange={() => {}} />
    );
    expect(getByRole('button', { name: /next page/i })).toBeInTheDocument();
  });
});
