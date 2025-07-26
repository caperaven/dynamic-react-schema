import React from 'react';
import Box from '@mui/material/Box';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Box components from schema nodes.
 */
export default class BoxProvider implements Provider<SchemaNode> {
  public readonly type = 'Box';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    // Add keys to children if more than one child
    const childrenWithKeys = Array.isArray(parsedChildren)
      ? parsedChildren.map((child, idx) =>
          React.isValidElement(child) && child.key == null
            ? React.cloneElement(child, { key: idx })
            : child
        )
      : parsedChildren;
    return React.createElement(
      Box,
      props,
      ...childrenWithKeys
    );
  }
}
