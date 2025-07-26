import React from 'react';
import TabPanel from '@mui/lab/TabPanel';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class TabPanelProvider implements Provider<SchemaNode> {
  public readonly type = 'TabPanel';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      TabPanel,
      props,
      ...parsedChildren
    );
  }
}
