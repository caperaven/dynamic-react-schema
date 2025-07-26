/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableHeadProvider from './TableHeadProvider';
import { render } from '@testing-library/react';

describe('TableHeadProvider', () => {
  it('renders children inside TableHead', () => {
    const { getByText } = render(
      <TableHeadProvider>
        <tr><td>Test TableHead</td></tr>
      </TableHeadProvider>
    );
    expect(getByText('Test TableHead')).toBeInTheDocument();
  });
});
