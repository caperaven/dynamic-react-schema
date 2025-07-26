import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI InputAdornment components from schema nodes.
 */
export default class InputAdornmentProvider implements Provider<SchemaNode> {
  public readonly type = 'InputAdornment';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    // Ensure 'position' is always provided (required by MUI)
    const position = props.position || 'start';
    return (
      <InputAdornment {...props} position={position}>{parsedChildren}</InputAdornment>
    );
  }
}
