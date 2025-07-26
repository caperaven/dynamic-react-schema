import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI CssBaseline components from schema nodes.
 */
export default class CssBaselineProvider implements Provider<SchemaNode> {
  public readonly type = 'CssBaseline';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return (
      <CssBaseline {...props} />
    );
  }
}
