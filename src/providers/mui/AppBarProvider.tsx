import React from 'react';
import AppBar from '@mui/material/AppBar';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI AppBar components from schema nodes.
 */
export default class AppBarProvider implements Provider<SchemaNode> {
  public readonly type = 'AppBar';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <AppBar {...props}>{parsedChildren}</AppBar>
    );
  }
}
