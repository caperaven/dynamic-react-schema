import React from 'react';
import Dialog from '@mui/material/Dialog';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Dialog components from schema nodes.
 */
export default class DialogProvider implements Provider<SchemaNode> {
  public readonly type = 'Dialog';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    // Ensure 'open' prop is always provided (required by MUI Dialog)
    const { open = false, ...rest } = props;
    return (
      <Dialog open={open} {...rest}>{parsedChildren}</Dialog>
    );
  }
}
