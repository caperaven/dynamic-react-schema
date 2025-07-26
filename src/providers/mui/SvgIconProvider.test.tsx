/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import SvgIconProvider from './SvgIconProvider';
import { render } from '@testing-library/react';

describe('SvgIconProvider', () => {
  it('renders children inside SvgIcon', () => {
    const { getByText } = render(
      <SvgIconProvider>Test SvgIcon</SvgIconProvider>
    );
    expect(getByText('Test SvgIcon')).toBeInTheDocument();
  });
});
