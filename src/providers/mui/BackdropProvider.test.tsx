/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import BackdropProvider from './BackdropProvider';
import { render } from '@testing-library/react';

describe('BackdropProvider', () => {
  it('renders children inside Backdrop', () => {
    const { getByText } = render(
      <BackdropProvider open={true}>Test Backdrop</BackdropProvider>
    );
    expect(getByText('Test Backdrop')).toBeInTheDocument();
  });
});
