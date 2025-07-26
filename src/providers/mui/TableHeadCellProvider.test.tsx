/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableHeadCellProvider from './TableHeadCellProvider';
import { render } from '@testing-library/react';

describe('TableHeadCellProvider', () => {
  it('renders children inside TableHeadCell', () => {
    const { getByText } = render(
      <table><thead><tr><TableHeadCellProvider>Test HeadCell</TableHeadCellProvider></tr></thead></table>
    );
    expect(getByText('Test HeadCell')).toBeInTheDocument();
  });
});
