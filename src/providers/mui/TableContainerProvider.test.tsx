/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableContainerProvider from './TableContainerProvider';
import { render } from '@testing-library/react';

describe('TableContainerProvider', () => {
  it('renders children inside TableContainer', () => {
    const { getByText } = render(
      <TableContainerProvider>Test TableContainer</TableContainerProvider>
    );
    expect(getByText('Test TableContainer')).toBeInTheDocument();
  });
});
