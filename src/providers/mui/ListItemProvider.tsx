import React from 'react';
import ListItem from '@mui/material/ListItem';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI ListItem components from schema nodes.
 */
export default class ListItemProvider implements Provider<SchemaNode> {
  public readonly type = 'ListItem';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <ListItem {...props}>{parsedChildren}</ListItem>
    );
  }
}
