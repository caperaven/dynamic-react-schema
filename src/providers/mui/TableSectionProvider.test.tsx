/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableSectionProvider from './TableSectionProvider';
import { render } from '@testing-library/react';

describe('TableSectionProvider', () => {
  it('renders children inside TableSection', () => {
    const { getByText } = render(
      <TableSectionProvider>Test TableSection</TableSectionProvider>
    );
    expect(getByText('Test TableSection')).toBeInTheDocument();
  });
});
