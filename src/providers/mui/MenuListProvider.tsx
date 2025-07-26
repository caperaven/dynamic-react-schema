import React from 'react';
import MenuList from '@mui/material/MenuList';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI MenuList components from schema nodes.
 */
export default class MenuListProvider implements Provider<SchemaNode> {
  public readonly type = 'MenuList';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <MenuList {...props}>{parsedChildren}</MenuList>
    );
  }
}
