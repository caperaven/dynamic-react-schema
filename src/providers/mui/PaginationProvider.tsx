import React from 'react';
import Pagination from '@mui/material/Pagination';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Pagination components from schema nodes.
 */
export default class PaginationProvider implements Provider<SchemaNode> {
  public readonly type = 'Pagination';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return (
      <Pagination {...props} />
    );
  }
}
