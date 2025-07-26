import React from 'react';
import Radio from '@mui/material/Radio';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Radio components from schema nodes.
 */
export default class RadioProvider implements Provider<SchemaNode> {
  public readonly type = 'Radio';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return (
      <Radio {...props} />
    );
  }
}
