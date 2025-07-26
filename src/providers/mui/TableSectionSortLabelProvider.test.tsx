/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableSectionSortLabelProvider from './TableSectionSortLabelProvider';
import { render } from '@testing-library/react';

describe('TableSectionSortLabelProvider', () => {
  it('renders children inside TableSectionSortLabel', () => {
    const { getByText } = render(
      <TableSectionSortLabelProvider>Test TableSectionSortLabel</TableSectionSortLabelProvider>
    );
    expect(getByText('Test TableSectionSortLabel')).toBeInTheDocument();
  });
});
