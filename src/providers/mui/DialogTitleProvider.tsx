import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI DialogTitle components from schema nodes.
 */
export default class DialogTitleProvider implements Provider<SchemaNode> {
  public readonly type = 'DialogTitle';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <DialogTitle {...props}>{parsedChildren}</DialogTitle>
    );
  }
}
