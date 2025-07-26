/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableBodyProvider from './TableBodyProvider';
import { render } from '@testing-library/react';

describe('TableBodyProvider', () => {
  it('renders children inside TableBody', () => {
    const { getByText } = render(
      <TableBodyProvider>
        <tr><td>Test TableBody</td></tr>
      </TableBodyProvider>
    );
    expect(getByText('Test TableBody')).toBeInTheDocument();
  });
});
