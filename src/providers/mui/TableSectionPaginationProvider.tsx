import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class TableSectionPaginationProvider implements Provider<SchemaNode> {
  public readonly type = 'TableSectionPagination';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    // TablePagination requires: count, onPageChange, page, rowsPerPage
    const {
      count = 0,
      onPageChange = () => {},
      page = 0,
      rowsPerPage = 10,
      ...rest
    } = props;
    return React.createElement(
      TablePagination,
      { count, onPageChange, page, rowsPerPage, ...rest }
    );
  }
}
