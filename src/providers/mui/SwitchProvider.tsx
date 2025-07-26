import React from 'react';
import Switch from '@mui/material/Switch';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Switch components from schema nodes.
 */
export default class SwitchProvider implements Provider<SchemaNode> {
  public readonly type = 'Switch';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return (
      <Switch {...props} />
    );
  }
}
