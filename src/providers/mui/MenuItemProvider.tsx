import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI MenuItem components from schema nodes.
 */
export default class MenuItemProvider implements Provider<SchemaNode> {
  public readonly type = 'MenuItem';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <MenuItem {...props}>{parsedChildren}</MenuItem>
    );
  }
}
