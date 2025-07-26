import React from 'react';
import Tab from '@mui/material/Tab';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Tab components from schema nodes.
 */
export default class TabProvider implements Provider<SchemaNode> {
  public readonly type = 'Tab';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return React.createElement(
      Tab,
      props
    );
  }
}
