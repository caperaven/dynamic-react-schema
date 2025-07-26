import React from 'react';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI ListItemSecondaryAction components from schema nodes.
 */
export default class ListItemSecondaryActionProvider implements Provider<SchemaNode> {
  public readonly type = 'ListItemSecondaryAction';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <ListItemSecondaryAction {...props}>{parsedChildren}</ListItemSecondaryAction>
    );
  }
}
