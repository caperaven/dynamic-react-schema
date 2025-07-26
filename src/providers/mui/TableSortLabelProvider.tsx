import React from 'react';
import TableSortLabel from '@mui/material/TableSortLabel';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class TableSortLabelProvider implements Provider<SchemaNode> {
  public readonly type = 'TableSortLabel';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      TableSortLabel,
      props,
      ...parsedChildren
    );
  }
}
