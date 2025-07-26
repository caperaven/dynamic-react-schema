import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI ListItemIcon components from schema nodes.
 */
export default class ListItemIconProvider implements Provider<SchemaNode> {
  public readonly type = 'ListItemIcon';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <ListItemIcon {...props}>{parsedChildren}</ListItemIcon>
    );
  }
}
