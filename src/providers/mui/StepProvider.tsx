import React from 'react';
import Step from '@mui/material/Step';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Step components from schema nodes.
 */
export default class StepProvider implements Provider<SchemaNode> {
  public readonly type = 'Step';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <Step {...props}>{parsedChildren}</Step>
    );
  }
}
