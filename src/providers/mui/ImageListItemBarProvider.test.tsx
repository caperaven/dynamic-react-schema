/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import ImageListItemBarProvider from './ImageListItemBarProvider';
import { render } from '@testing-library/react';

describe('ImageListItemBarProvider', () => {
  it('renders with the correct title', () => {
    const { getByText } = render(
      <ImageListItemBarProvider title="Test Bar" />
    );
    expect(getByText('Test Bar')).toBeInTheDocument();
  });
});
