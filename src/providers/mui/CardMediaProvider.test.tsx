import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CardMediaProvider from './CardMediaProvider';
import '@testing-library/jest-dom';

describe('CardMediaProvider', () => {
  it('renders CardMedia with props', () => {
    const provider = new CardMediaProvider();
    const node = { type: 'CardMedia', props: { image: 'img.png', title: 'media', 'data-testid': 'card-media' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const media = getByTestId('card-media');
    expect(media).toBeInTheDocument();
    expect(media).toHaveAttribute('title', 'media');
  });
});
