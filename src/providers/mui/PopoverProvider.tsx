import React from 'react';
import Popover from '@mui/material/Popover';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Popover components from schema nodes.
 */
export default class PopoverProvider implements Provider<SchemaNode> {
  public readonly type = 'Popover';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    // Ensure 'open' is always provided (required by MUI)
    const open = typeof props.open === 'boolean' ? props.open : false;
    return (
      <Popover {...props} open={open}>{parsedChildren}</Popover>
    );
  }
}
