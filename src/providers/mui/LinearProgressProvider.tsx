import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI LinearProgress components from schema nodes.
 */
export default class LinearProgressProvider implements Provider<SchemaNode> {
  public readonly type = 'LinearProgress';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return (
      <LinearProgress {...props} />
    );
  }
}
