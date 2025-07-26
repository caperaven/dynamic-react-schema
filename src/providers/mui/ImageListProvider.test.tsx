/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import ImageListProvider from './ImageListProvider';
import { render } from '@testing-library/react';

describe('ImageListProvider', () => {
  it('renders children inside ImageList', () => {
    const { getByText } = render(
      <ImageListProvider>Test ImageList</ImageListProvider>
    );
    expect(getByText('Test ImageList')).toBeInTheDocument();
  });
});
