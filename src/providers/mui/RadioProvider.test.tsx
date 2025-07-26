import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import RadioProvider from './RadioProvider';
import '@testing-library/jest-dom';

describe('RadioProvider', () => {
  it('renders a Radio with props', () => {
    const provider = new RadioProvider();
    const node = { type: 'Radio', props: { checked: true, 'data-testid': 'radio' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const radio = getByTestId('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toBeChecked();
  });
});
