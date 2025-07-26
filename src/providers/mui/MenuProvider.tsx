import React from 'react';
import Menu from '@mui/material/Menu';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Menu components from schema nodes.
 */
export default class MenuProvider implements Provider<SchemaNode> {
  public readonly type = 'Menu';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    // Ensure 'open' is always provided (required by MUI)
    const open = typeof props.open === 'boolean' ? props.open : false;
    return (
      <Menu {...props} open={open}>{parsedChildren}</Menu>
    );
  }
}
