import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI CircularProgress components from schema nodes.
 */
export default class CircularProgressProvider implements Provider<SchemaNode> {
  public readonly type = 'CircularProgress';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return (
      <CircularProgress {...props} />
    );
  }
}
