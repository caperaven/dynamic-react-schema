import React from 'react';
import Collapse from '@mui/material/Collapse';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Collapse components from schema nodes.
 */
export default class CollapseProvider implements Provider<SchemaNode> {
  public readonly type = 'Collapse';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      Collapse,
      props,
      ...parsedChildren
    );
  }
}
