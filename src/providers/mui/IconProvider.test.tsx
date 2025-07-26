/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import IconProvider from './IconProvider';
import { render } from '@testing-library/react';

describe('IconProvider', () => {
  it('renders children inside Icon', () => {
    const { getByText } = render(
      <IconProvider>star</IconProvider>
    );
    expect(getByText('star')).toBeInTheDocument();
  });
});
