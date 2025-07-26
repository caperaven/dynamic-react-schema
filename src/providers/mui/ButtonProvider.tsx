import React from 'react';
import Button from '@mui/material/Button';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Button components from schema nodes.
 */
export default class ButtonProvider implements Provider<SchemaNode> {
  public readonly type = 'Button';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <Button {...props}>{parsedChildren}</Button>
    );
  }
}
