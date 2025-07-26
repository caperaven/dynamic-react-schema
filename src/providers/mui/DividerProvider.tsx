import React from 'react';
import Divider from '@mui/material/Divider';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Divider components from schema nodes.
 */
export default class DividerProvider implements Provider<SchemaNode> {
  public readonly type = 'Divider';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return (
      <Divider {...props} />
    );
  }
}
