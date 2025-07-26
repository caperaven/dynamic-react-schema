import React from 'react';
import TableHead from '@mui/material/TableHead';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class TableSectionHeadProvider implements Provider<SchemaNode> {
  public readonly type = 'TableSectionHead';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      TableHead,
      props,
      ...parsedChildren
    );
  }
}
