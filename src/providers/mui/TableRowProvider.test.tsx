/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableRowProvider from './TableRowProvider';
import { render } from '@testing-library/react';

describe('TableRowProvider', () => {
  it('renders children inside TableRow', () => {
    const { getByText } = render(
      <TableRowProvider>
        <td>Test TableRow</td>
      </TableRowProvider>
    );
    expect(getByText('Test TableRow')).toBeInTheDocument();
  });
});
