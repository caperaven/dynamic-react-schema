import React from 'react';
import StepButton from '@mui/material/StepButton';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI StepButton components from schema nodes.
 */
export default class StepButtonProvider implements Provider<SchemaNode> {
  public readonly type = 'StepButton';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <StepButton {...props}>{parsedChildren}</StepButton>
    );
  }
}
