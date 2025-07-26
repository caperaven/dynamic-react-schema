import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Breadcrumbs components from schema nodes.
 */
export default class BreadcrumbsProvider implements Provider<SchemaNode> {
  public readonly type = 'Breadcrumbs';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <Breadcrumbs {...props}>{parsedChildren}</Breadcrumbs>
    );
  }
}
