/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import AccordionSummaryProvider from './AccordionSummaryProvider';
import { render } from '@testing-library/react';

describe('AccordionSummaryProvider', () => {
  it('renders children inside AccordionSummary', () => {
    const { getByText } = render(
      <AccordionSummaryProvider>Test AccordionSummary</AccordionSummaryProvider>
    );
    expect(getByText('Test AccordionSummary')).toBeInTheDocument();
  });
});
