import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SliderProvider from './SliderProvider';
import '@testing-library/jest-dom';

describe('SliderProvider', () => {
  it('renders a Slider with props', () => {
    const provider = new SliderProvider();
    const node = { type: 'Slider', props: { value: 30, min: 0, max: 100, 'data-testid': 'slider' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const slider = getByTestId('slider');
    expect(slider).toBeInTheDocument();
  });
});
