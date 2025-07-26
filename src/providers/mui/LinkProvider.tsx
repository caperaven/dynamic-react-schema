import React from 'react';
import Link from '@mui/material/Link';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Link components from schema nodes.
 */
export default class LinkProvider implements Provider<SchemaNode> {
  public readonly type = 'Link';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <Link {...props}>{parsedChildren}</Link>
    );
  }
}
