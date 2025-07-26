import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Backdrop components from schema nodes.
 */
export default class BackdropProvider implements Provider<SchemaNode> {
  public readonly type = 'Backdrop';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    // Ensure 'open' prop is always provided (required by MUI Backdrop)
    const { open = false, ...restProps } = props;
    return React.createElement(
      Backdrop,
      { open, ...restProps },
      ...parsedChildren
    );
  }
}
