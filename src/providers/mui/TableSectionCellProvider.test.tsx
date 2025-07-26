/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableSectionCellProvider from './TableSectionCellProvider';
import { render } from '@testing-library/react';

describe('TableSectionCellProvider', () => {
  it('renders children inside TableSectionCell', () => {
    const { getByText } = render(
      <TableSectionCellProvider>Test TableSectionCell</TableSectionCellProvider>
    );
    expect(getByText('Test TableSectionCell')).toBeInTheDocument();
  });
});
