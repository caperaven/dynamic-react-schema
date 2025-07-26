/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import ZoomProvider from './ZoomProvider';
import { render } from '@testing-library/react';

describe('ZoomProvider', () => {
  it('renders children inside Zoom', () => {
    const { getByText } = render(
      <ZoomProvider in={true}>
        <div>Test Zoom</div>
      </ZoomProvider>
    );
    expect(getByText('Test Zoom')).toBeInTheDocument();
  });
});
