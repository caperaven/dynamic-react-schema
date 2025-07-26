/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableSectionPaginationProvider from './TableSectionPaginationProvider';
import { render } from '@testing-library/react';

describe('TableSectionPaginationProvider', () => {
  it('renders TableSectionPagination', () => {
    const { getByRole } = render(
      <TableSectionPaginationProvider count={10} page={0} onPageChange={() => {}} rowsPerPage={5} onRowsPerPageChange={() => {}} />
    );
    expect(getByRole('button', { name: /next page/i })).toBeInTheDocument();
  });
});
