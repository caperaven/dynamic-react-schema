import React from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class ToggleButtonGroupProvider implements Provider<SchemaNode> {
  public readonly type = 'ToggleButtonGroup';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      ToggleButtonGroup,
      props,
      ...parsedChildren
    );
  }
}
