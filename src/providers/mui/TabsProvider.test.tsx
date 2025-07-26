/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TabsProvider from './TabsProvider';
import { render } from '@testing-library/react';

describe('TabsProvider', () => {
  it('renders children inside Tabs', () => {
    const { getByText } = render(
      <TabsProvider value={0} onChange={() => {}}>
        <div>Test Tabs</div>
      </TabsProvider>
    );
    expect(getByText('Test Tabs')).toBeInTheDocument();
  });
});
