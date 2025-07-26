import React from 'react';
import Stepper from '@mui/material/Stepper';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Stepper components from schema nodes.
 */
export default class StepperProvider implements Provider<SchemaNode> {
  public readonly type = 'Stepper';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <Stepper {...props}>{parsedChildren}</Stepper>
    );
  }
}
