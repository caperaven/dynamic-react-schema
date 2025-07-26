import React from 'react';
import Card from '@mui/material/Card';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Card components from schema nodes.
 */
export default class CardProvider implements Provider<SchemaNode> {
  public readonly type = 'Card';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      Card,
      props,
      ...parsedChildren
    );
  }
}
