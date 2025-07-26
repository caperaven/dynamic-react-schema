import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI ListSubheader components from schema nodes.
 */
export default class ListSubheaderProvider implements Provider<SchemaNode> {
  public readonly type = 'ListSubheader';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <ListSubheader {...props}>{parsedChildren}</ListSubheader>
    );
  }
}
