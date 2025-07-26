import React from 'react';
import CardActionArea from '@mui/material/CardActionArea';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI CardActionArea components from schema nodes.
 */
export default class CardActionAreaProvider implements Provider<SchemaNode> {
  public readonly type = 'CardActionArea';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      CardActionArea,
      props,
      ...parsedChildren
    );
  }
}
