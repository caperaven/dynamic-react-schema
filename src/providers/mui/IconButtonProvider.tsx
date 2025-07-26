import React from 'react';
import IconButton from '@mui/material/IconButton';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI IconButton components from schema nodes.
 */
export default class IconButtonProvider implements Provider<SchemaNode> {
  public readonly type = 'IconButton';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <IconButton {...props}>{parsedChildren}</IconButton>
    );
  }
}
