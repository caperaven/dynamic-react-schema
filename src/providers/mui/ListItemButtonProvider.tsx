import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI ListItemButton components from schema nodes.
 */
export default class ListItemButtonProvider implements Provider<SchemaNode> {
  public readonly type = 'ListItemButton';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <ListItemButton {...props}>{parsedChildren}</ListItemButton>
    );
  }
}
