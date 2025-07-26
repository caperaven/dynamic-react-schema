import React from 'react';
import TableCell from '@mui/material/TableCell';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class TableTitleProvider implements Provider<SchemaNode> {
  public readonly type = 'TableTitle';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      TableCell,
      props,
      ...parsedChildren
    );
  }
}
