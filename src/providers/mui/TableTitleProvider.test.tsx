/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TableTitleProvider from './TableTitleProvider';
import { render } from '@testing-library/react';

describe('TableTitleProvider', () => {
  it('renders children inside TableTitle', () => {
    const { getByText } = render(
      <TableTitleProvider>Test TableTitle</TableTitleProvider>
    );
    expect(getByText('Test TableTitle')).toBeInTheDocument();
  });
});
