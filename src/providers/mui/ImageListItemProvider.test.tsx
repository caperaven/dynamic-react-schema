/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import ImageListItemProvider from './ImageListItemProvider';
import { render } from '@testing-library/react';

describe('ImageListItemProvider', () => {
  it('renders children inside ImageListItem', () => {
    const { getByText } = render(
      <ImageListItemProvider>Test ImageListItem</ImageListItemProvider>
    );
    expect(getByText('Test ImageListItem')).toBeInTheDocument();
  });
});
