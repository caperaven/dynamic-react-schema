import React from 'react';
import Chip from '@mui/material/Chip';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Chip components from schema nodes.
 */
export default class ChipProvider implements Provider<SchemaNode> {
  public readonly type = 'Chip';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return React.createElement(
      Chip,
      props
    );
  }
}
