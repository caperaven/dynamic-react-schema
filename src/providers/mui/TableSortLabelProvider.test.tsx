/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableSortLabelProvider from './TableSortLabelProvider';
import { render } from '@testing-library/react';

describe('TableSortLabelProvider', () => {
  it('renders children inside TableSortLabel', () => {
    const { getByText } = render(
      <TableSortLabelProvider>Test Sort</TableSortLabelProvider>
    );
    expect(getByText('Test Sort')).toBeInTheDocument();
  });
});
