import React from 'react';
import DialogActions from '@mui/material/DialogActions';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI DialogActions components from schema nodes.
 */
export default class DialogActionsProvider implements Provider<SchemaNode> {
  public readonly type = 'DialogActions';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <DialogActions {...props}>{parsedChildren}</DialogActions>
    );
  }
}
