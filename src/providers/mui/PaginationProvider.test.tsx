import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PaginationProvider from './PaginationProvider';
import '@testing-library/jest-dom';

describe('PaginationProvider', () => {
  it('renders a Pagination with props', () => {
    const provider = new PaginationProvider();
    const node = { type: 'Pagination', props: { count: 10, page: 2, 'data-testid': 'pagination' } };
    const element = provider.parse(node, {} as any);
    const { getByTestId } = render(<>{element}</>);
    const pagination = getByTestId('pagination');
    expect(pagination).toBeInTheDocument();
  });
});
