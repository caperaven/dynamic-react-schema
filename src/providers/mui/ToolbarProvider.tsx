


import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Toolbar components from schema nodes.
 */
export default class ToolbarProvider implements Provider<SchemaNode> {
  public readonly type = 'Toolbar';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <Toolbar {...props}>{parsedChildren}</Toolbar>
    );
  }
}
