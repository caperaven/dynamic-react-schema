import React from 'react';
import Select from '@mui/material/Select';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Select components from schema nodes.
 */
export default class SelectProvider implements Provider<SchemaNode> {
  public readonly type = 'Select';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <Select {...props}>{parsedChildren}</Select>
    );
  }
}
