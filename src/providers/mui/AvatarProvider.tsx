import React from 'react';
import Avatar from '@mui/material/Avatar';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Avatar components from schema nodes.
 */
export default class AvatarProvider implements Provider<SchemaNode> {
  public readonly type = 'Avatar';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      Avatar,
      props,
      ...parsedChildren
    );
  }
}
