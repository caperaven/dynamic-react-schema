import React from 'react';
import Stack from '@mui/material/Stack';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Stack components from schema nodes.
 */
export default class StackProvider implements Provider<SchemaNode> {
  public readonly type = 'Stack';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <Stack {...props}>{parsedChildren}</Stack>
    );
  }
}
