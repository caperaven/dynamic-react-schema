import React from 'react';
import StepContent from '@mui/material/StepContent';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI StepContent components from schema nodes.
 */
export default class StepContentProvider implements Provider<SchemaNode> {
  public readonly type = 'StepContent';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <StepContent {...props}>{parsedChildren}</StepContent>
    );
  }
}
