// ...existing code...
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import AutocompleteProvider from './AutocompleteProvider';
import '@testing-library/jest-dom';

// Mock options for Autocomplete
const options = ['Option 1', 'Option 2'];

describe('AutocompleteProvider', () => {
  it('renders an Autocomplete with options and label', () => {
    const provider = new AutocompleteProvider();
    const node = {
      type: 'Autocomplete',
      props: {
        options,
        label: 'Choose',
        'data-testid': 'autocomplete',
      },
    };
  const element = provider.parse(node);
    const { getByLabelText } = render(<>{element}</>);
    const input = getByLabelText('Choose');
    expect(input).toBeInTheDocument();
  });
});
