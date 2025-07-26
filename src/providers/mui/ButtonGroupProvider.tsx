import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI ButtonGroup components from schema nodes.
 */
export default class ButtonGroupProvider implements Provider<SchemaNode> {
  public readonly type = 'ButtonGroup';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return (
      <ButtonGroup {...props}>{parsedChildren}</ButtonGroup>
    );
  }
}
