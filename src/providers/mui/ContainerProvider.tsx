import React from 'react';
import Container from '@mui/material/Container';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Container components from schema nodes.
 */
export default class ContainerProvider implements Provider<SchemaNode> {
  public readonly type = 'Container';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      Container,
      props,
      ...parsedChildren
    );
  }
}
