import React from 'react';
import Badge from '@mui/material/Badge';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Badge components from schema nodes.
 */
export default class BadgeProvider implements Provider<SchemaNode> {
  public readonly type = 'Badge';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      Badge,
      props,
      ...parsedChildren
    );
  }
}
