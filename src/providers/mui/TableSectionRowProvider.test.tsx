/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableSectionRowProvider from './TableSectionRowProvider';
import { render } from '@testing-library/react';

describe('TableSectionRowProvider', () => {
  it('renders children inside TableSectionRow', () => {
    const { getByText } = render(
      <TableSectionRowProvider>Test TableSectionRow</TableSectionRowProvider>
    );
    expect(getByText('Test TableSectionRow')).toBeInTheDocument();
  });
});
