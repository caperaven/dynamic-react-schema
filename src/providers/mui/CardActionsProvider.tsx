import React from 'react';
import CardActions from '@mui/material/CardActions';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI CardActions components from schema nodes.
 */
export default class CardActionsProvider implements Provider<SchemaNode> {
  public readonly type = 'CardActions';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      CardActions,
      props,
      ...parsedChildren
    );
  }
}
