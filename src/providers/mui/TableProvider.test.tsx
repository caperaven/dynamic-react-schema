/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableProvider from './TableProvider';
import { render } from '@testing-library/react';

describe('TableProvider', () => {
  it('renders children inside Table', () => {
    const { getByText } = render(
      <TableProvider>
        <tbody>
          <tr><td>Test Table</td></tr>
        </tbody>
      </TableProvider>
    );
    expect(getByText('Test Table')).toBeInTheDocument();
  });
});
