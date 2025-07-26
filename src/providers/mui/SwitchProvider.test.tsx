import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SwitchProvider from './SwitchProvider';
import '@testing-library/jest-dom';

describe('SwitchProvider', () => {
  it('renders a Switch with props', () => {
  const provider = new SwitchProvider();
  const node = { type: 'Switch', props: { checked: true, 'data-testid': 'switch' } };
  const element = provider.parse(node, {} as any);
  const { getByTestId } = render(<>{element}</>);
  const wrapper = getByTestId('switch');
  expect(wrapper).toBeInTheDocument();
  const input = wrapper.querySelector('input[type="checkbox"]');
  expect(input).toBeChecked();
  });
});
