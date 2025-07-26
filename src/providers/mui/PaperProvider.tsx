import React from 'react';
import Paper from '@mui/material/Paper';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Paper components from schema nodes.
 */
export default class PaperProvider implements Provider<SchemaNode> {
  public readonly type = 'Paper';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <Paper {...props}>{parsedChildren}</Paper>
    );
  }
}
