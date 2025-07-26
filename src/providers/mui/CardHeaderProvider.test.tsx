import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CardHeaderProvider from './CardHeaderProvider';
import '@testing-library/jest-dom';

describe('CardHeaderProvider', () => {
  it('renders CardHeader with props', () => {
    const provider = new CardHeaderProvider();
    const node = { type: 'CardHeader', props: { title: 'Title', subheader: 'Subheader', 'data-testid': 'card-header' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId, getByText } = render(<>{element}</>);
    const header = getByTestId('card-header');
    expect(header).toBeInTheDocument();
    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Subheader')).toBeInTheDocument();
  });
});
