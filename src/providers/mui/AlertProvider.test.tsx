/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import AlertProvider from './AlertProvider';
import { render } from '@testing-library/react';

describe('AlertProvider', () => {
  it('renders children inside Alert', () => {
    const { getByText } = render(
      <AlertProvider severity="info">Test Alert</AlertProvider>
    );
    expect(getByText('Test Alert')).toBeInTheDocument();
  });
});
