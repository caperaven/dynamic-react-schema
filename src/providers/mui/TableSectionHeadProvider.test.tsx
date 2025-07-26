/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableSectionHeadProvider from './TableSectionHeadProvider';
import { render } from '@testing-library/react';

describe('TableSectionHeadProvider', () => {
  it('renders children inside TableSectionHead', () => {
    const { getByText } = render(
      <TableSectionHeadProvider>Test TableSectionHead</TableSectionHeadProvider>
    );
    expect(getByText('Test TableSectionHead')).toBeInTheDocument();
  });
});
