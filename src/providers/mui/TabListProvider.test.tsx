/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import TabListProvider from './TabListProvider';
import { render } from '@testing-library/react';

describe('TabListProvider', () => {
  it('renders children inside TabList', () => {
    const { getByText } = render(
      <TabListProvider>Test TabList</TabListProvider>
    );
    expect(getByText('Test TabList')).toBeInTheDocument();
  });
});
