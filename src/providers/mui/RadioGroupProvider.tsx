import React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI RadioGroup components from schema nodes.
 */
export default class RadioGroupProvider implements Provider<SchemaNode> {
  public readonly type = 'RadioGroup';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <RadioGroup {...props}>{parsedChildren}</RadioGroup>
    );
  }
}
