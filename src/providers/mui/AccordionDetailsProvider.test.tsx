/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import AccordionDetailsProvider from './AccordionDetailsProvider';
import { render } from '@testing-library/react';

describe('AccordionDetailsProvider', () => {
  it('renders children inside AccordionDetails', () => {
    const { getByText } = render(
      <AccordionDetailsProvider>Test AccordionDetails</AccordionDetailsProvider>
    );
    expect(getByText('Test AccordionDetails')).toBeInTheDocument();
  });
});
