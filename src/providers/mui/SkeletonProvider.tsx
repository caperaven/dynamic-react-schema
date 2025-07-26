import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Skeleton components from schema nodes.
 */
export default class SkeletonProvider implements Provider<SchemaNode> {
  public readonly type = 'Skeleton';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return (
      <Skeleton {...props} />
    );
  }
}
