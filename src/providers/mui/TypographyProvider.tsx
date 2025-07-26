import React from 'react';
import Typography from '@mui/material/Typography';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class TypographyProvider implements Provider<SchemaNode> {
  public readonly type = 'Typography';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      Typography,
      props,
      ...parsedChildren
    );
  }
}
