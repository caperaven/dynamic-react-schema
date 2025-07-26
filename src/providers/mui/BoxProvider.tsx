import React from 'react';
import Box from '@mui/material/Box';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Box components from schema nodes.
 */
export default class BoxProvider implements Provider<SchemaNode> {
  public readonly type = 'Box';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <Box {...props}>{parsedChildren}</Box>
    );
  }
}
