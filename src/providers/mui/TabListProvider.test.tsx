/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';

import TabListProvider from './TabListProvider';
import TabContextProvider from './TabContextProvider';
import { render } from '@testing-library/react';

describe('TabListProvider', () => {
  it('renders children inside TabList', () => {
    const { getByText } = render(
      <TabContextProvider value="1">
        <TabListProvider>Test TabList</TabListProvider>
      </TabContextProvider>
    );
    expect(getByText('Test TabList')).toBeInTheDocument();
  });
});
