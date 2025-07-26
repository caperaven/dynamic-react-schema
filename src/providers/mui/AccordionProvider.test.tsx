/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import AccordionProvider from './AccordionProvider';
import { render } from '@testing-library/react';

describe('AccordionProvider', () => {
  it('renders children inside Accordion', () => {
    const { getByText } = render(
      <AccordionProvider>Test Accordion</AccordionProvider>
    );
    expect(getByText('Test Accordion')).toBeInTheDocument();
  });
});
