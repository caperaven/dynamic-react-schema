/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableRowGroupProvider from './TableRowGroupProvider';
import { render } from '@testing-library/react';

describe('TableRowGroupProvider', () => {
  it('renders children inside TableRowGroup', () => {
    const { getByText } = render(
      <TableRowGroupProvider>Test TableRowGroup</TableRowGroupProvider>
    );
    expect(getByText('Test TableRowGroup')).toBeInTheDocument();
  });
});
