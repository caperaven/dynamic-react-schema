import React from 'react';
import Fab from '@mui/material/Fab';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Fab components from schema nodes.
 */
export default class FabProvider implements Provider<SchemaNode> {
  public readonly type = 'Fab';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <Fab {...props}>{parsedChildren}</Fab>
    );
  }
}
