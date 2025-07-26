/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import SlideProvider from './SlideProvider';
import { render } from '@testing-library/react';

describe('SlideProvider', () => {
  it('renders children inside Slide', () => {
    const { getByText } = render(
      <SlideProvider in={true} direction="up">
        <div>Test Slide</div>
      </SlideProvider>
    );
    expect(getByText('Test Slide')).toBeInTheDocument();
  });
});
