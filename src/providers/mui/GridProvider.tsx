import React from 'react';
import Grid from '@mui/material/Grid';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Grid components from schema nodes.
 */
export default class GridProvider implements Provider<SchemaNode> {
  public readonly type = 'Grid';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <Grid {...props}>{parsedChildren}</Grid>
    );
  }
}
