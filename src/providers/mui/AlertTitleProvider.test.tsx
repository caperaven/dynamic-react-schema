/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import AlertTitleProvider from './AlertTitleProvider';
import { render } from '@testing-library/react';

describe('AlertTitleProvider', () => {
  it('renders children inside AlertTitle', () => {
    const { getByText } = render(
      <AlertTitleProvider>Test AlertTitle</AlertTitleProvider>
    );
    expect(getByText('Test AlertTitle')).toBeInTheDocument();
  });
});
