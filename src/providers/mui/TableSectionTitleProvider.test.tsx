/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableSectionTitleProvider from './TableSectionTitleProvider';
import { render } from '@testing-library/react';

describe('TableSectionTitleProvider', () => {
  it('renders children inside TableSectionTitle', () => {
    const { getByText } = render(
      <TableSectionTitleProvider>Test TableSectionTitle</TableSectionTitleProvider>
    );
    expect(getByText('Test TableSectionTitle')).toBeInTheDocument();
  });
});
