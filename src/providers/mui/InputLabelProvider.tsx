import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI InputLabel components from schema nodes.
 */
export default class InputLabelProvider implements Provider<SchemaNode> {
  public readonly type = 'InputLabel';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <InputLabel {...props}>{parsedChildren}</InputLabel>
    );
  }
}
