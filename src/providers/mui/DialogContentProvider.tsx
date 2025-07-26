import React from 'react';
import DialogContent from '@mui/material/DialogContent';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI DialogContent components from schema nodes.
 */
export default class DialogContentProvider implements Provider<SchemaNode> {
  public readonly type = 'DialogContent';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <DialogContent {...props}>{parsedChildren}</DialogContent>
    );
  }
}
