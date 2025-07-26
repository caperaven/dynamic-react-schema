import React from 'react';
import StepLabel from '@mui/material/StepLabel';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI StepLabel components from schema nodes.
 */
export default class StepLabelProvider implements Provider<SchemaNode> {
  public readonly type = 'StepLabel';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <StepLabel {...props}>{parsedChildren}</StepLabel>
    );
  }
}
