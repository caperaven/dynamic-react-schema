


import React from 'react';
import AlertTitle from '@mui/material/AlertTitle';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI AlertTitle components from schema nodes.
 */
export default class AlertTitleProvider implements Provider<SchemaNode> {
  public readonly type = 'AlertTitle';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      AlertTitle,
      props,
      ...parsedChildren
    );
  }
}
