import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class ToggleButtonProvider implements Provider<SchemaNode> {
  public readonly type = 'ToggleButton';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    const { value = '', ...restProps } = props;
    return React.createElement(
      ToggleButton,
      { value, ...restProps },
      ...parsedChildren
    );
  }
}
