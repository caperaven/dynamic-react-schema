/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TabContextProvider from './TabContextProvider';
import { render } from '@testing-library/react';

describe('TabContextProvider', () => {
  it('renders children inside TabContext', () => {
    const { getByText } = render(
      <TabContextProvider value="1">Test TabContext</TabContextProvider>
    );
    expect(getByText('Test TabContext')).toBeInTheDocument();
  });
});
