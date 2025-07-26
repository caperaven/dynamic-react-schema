/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TabPanelProvider from './TabPanelProvider';
import { render } from '@testing-library/react';
import TabContextProvider from './TabContextProvider';

describe('TabPanelProvider', () => {
  it('renders children inside TabPanel', () => {
    const { getByText } = render(
      <TabContextProvider value="1">
        <TabPanelProvider value="1">Test TabPanel</TabPanelProvider>
      </TabContextProvider>
    );
    expect(getByText('Test TabPanel')).toBeInTheDocument();
  });
});
