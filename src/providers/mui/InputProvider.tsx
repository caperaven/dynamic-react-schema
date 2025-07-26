import React from 'react';
import Input from '@mui/material/Input';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Input components from schema nodes.
 */
export default class InputProvider implements Provider<SchemaNode> {
  public readonly type = 'Input';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return (
      <Input {...props} />
    );
  }
}
