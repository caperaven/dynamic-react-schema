import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI CardMedia components from schema nodes.
 */
export default class CardMediaProvider implements Provider<SchemaNode> {
  public readonly type = 'CardMedia';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return (
      <CardMedia {...props} />
    );
  }
}
