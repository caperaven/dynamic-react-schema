/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableFooterProvider from './TableFooterProvider';
import { render } from '@testing-library/react';

describe('TableFooterProvider', () => {
  it('renders children inside TableFooter', () => {
    const { getByText } = render(
      <TableFooterProvider>
        <tr><td>Test TableFooter</td></tr>
      </TableFooterProvider>
    );
    expect(getByText('Test TableFooter')).toBeInTheDocument();
  });
});
