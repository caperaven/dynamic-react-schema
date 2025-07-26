import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI ListItemText components from schema nodes.
 */
export default class ListItemTextProvider implements Provider<SchemaNode> {
  public readonly type = 'ListItemText';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <ListItemText {...props}>{parsedChildren}</ListItemText>
    );
  }
}
