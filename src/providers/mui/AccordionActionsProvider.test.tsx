/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import AccordionActionsProvider from './AccordionActionsProvider';
import { render } from '@testing-library/react';

describe('AccordionActionsProvider', () => {
  it('renders children inside AccordionActions', () => {
    const { getByText } = render(
      <AccordionActionsProvider>Test AccordionActions</AccordionActionsProvider>
    );
    expect(getByText('Test AccordionActions')).toBeInTheDocument();
  });
});
