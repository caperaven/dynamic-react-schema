import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI CardHeader components from schema nodes.
 */
export default class CardHeaderProvider implements Provider<SchemaNode> {
  public readonly type = 'CardHeader';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return (
      <CardHeader {...props} />
    );
  }
}
