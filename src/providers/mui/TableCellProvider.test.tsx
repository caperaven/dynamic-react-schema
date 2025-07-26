/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableCellProvider from './TableCellProvider';
import { render } from '@testing-library/react';

describe('TableCellProvider', () => {
  it('renders children inside TableCell', () => {
    const { getByText } = render(
      <TableCellProvider>Test TableCell</TableCellProvider>
    );
    expect(getByText('Test TableCell')).toBeInTheDocument();
  });
});
