/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TabPanelProvider from './TabPanelProvider';
import { render } from '@testing-library/react';

describe('TabPanelProvider', () => {
  it('renders children inside TabPanel', () => {
    const { getByText } = render(
      <TabPanelProvider value="1">Test TabPanel</TabPanelProvider>
    );
    expect(getByText('Test TabPanel')).toBeInTheDocument();
  });
});
