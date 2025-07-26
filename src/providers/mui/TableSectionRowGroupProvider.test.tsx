/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableSectionRowGroupProvider from './TableSectionRowGroupProvider';
import { render } from '@testing-library/react';

describe('TableSectionRowGroupProvider', () => {
  it('renders children inside TableSectionRowGroup', () => {
    const { getByText } = render(
      <TableSectionRowGroupProvider>Test TableSectionRowGroup</TableSectionRowGroupProvider>
    );
    expect(getByText('Test TableSectionRowGroup')).toBeInTheDocument();
  });
});
