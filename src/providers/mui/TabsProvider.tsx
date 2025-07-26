import React from 'react';
import Tabs from '@mui/material/Tabs';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class TabsProvider implements Provider<SchemaNode> {
  public readonly type = 'Tabs';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    // Default value to 0 if not provided
    const { value = 0, ...restProps } = props;
    return React.createElement(
      Tabs,
      { value, ...restProps },
      ...parsedChildren
    );
  }
}
