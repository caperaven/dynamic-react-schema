import React from 'react';
import TableRow from '@mui/material/TableRow';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class TableSectionProvider implements Provider<SchemaNode> {
  public readonly type = 'TableSection';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      TableRow,
      props,
      ...parsedChildren
    );
  }
}
