import React from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI ListItemAvatar components from schema nodes.
 */
export default class ListItemAvatarProvider implements Provider<SchemaNode> {
  public readonly type = 'ListItemAvatar';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <ListItemAvatar {...props}>{parsedChildren}</ListItemAvatar>
    );
  }
}
