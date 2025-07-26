import React from 'react';
import TabList from '@mui/lab/TabList';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class TabListProvider implements Provider<SchemaNode> {
  public readonly type = 'TabList';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      TabList,
      props,
      ...parsedChildren
    );
  }
}
