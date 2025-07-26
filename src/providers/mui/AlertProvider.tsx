


import React from 'react';
import Alert from '@mui/material/Alert';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Alert components from schema nodes.
 */
export default class AlertProvider implements Provider<SchemaNode> {
  public readonly type = 'Alert';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      Alert,
      props,
      ...parsedChildren
    );
  }
}
