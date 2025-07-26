import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Checkbox components from schema nodes.
 */
export default class CheckboxProvider implements Provider<SchemaNode> {
  public readonly type = 'Checkbox';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return React.createElement(
      Checkbox,
      props
    );
  }
}
