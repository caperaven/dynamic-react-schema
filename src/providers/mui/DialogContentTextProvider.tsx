import React from 'react';
import DialogContentText from '@mui/material/DialogContentText';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI DialogContentText components from schema nodes.
 */
export default class DialogContentTextProvider implements Provider<SchemaNode> {
  public readonly type = 'DialogContentText';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <DialogContentText {...props}>{parsedChildren}</DialogContentText>
    );
  }
}
