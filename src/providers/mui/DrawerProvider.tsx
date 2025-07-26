import React from 'react';
import Drawer from '@mui/material/Drawer';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Drawer components from schema nodes.
 */
export default class DrawerProvider implements Provider<SchemaNode> {
  public readonly type = 'Drawer';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    // Ensure 'open' prop is always provided (required by MUI Drawer)
    const { open = false, ...rest } = props;
    return (
      <Drawer open={open} {...rest}>{parsedChildren}</Drawer>
    );
  }
}
