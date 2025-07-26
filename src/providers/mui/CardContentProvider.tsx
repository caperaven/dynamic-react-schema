import React from 'react';
import CardContent from '@mui/material/CardContent';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI CardContent components from schema nodes.
 */
export default class CardContentProvider implements Provider<SchemaNode> {
  public readonly type = 'CardContent';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      CardContent,
      props,
      ...parsedChildren
    );
  }
}
