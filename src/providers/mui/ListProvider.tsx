import React from 'react';
import List from '@mui/material/List';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI List components from schema nodes.
 */
export default class ListProvider implements Provider<SchemaNode> {
  public readonly type = 'List';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <List {...props}>{parsedChildren}</List>
    );
  }
}
