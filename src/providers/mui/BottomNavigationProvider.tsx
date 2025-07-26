import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI BottomNavigation components from schema nodes.
 */
export default class BottomNavigationProvider implements Provider<SchemaNode> {
  public readonly type = 'BottomNavigation';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <BottomNavigation {...props}>{parsedChildren}</BottomNavigation>
    );
  }
}
