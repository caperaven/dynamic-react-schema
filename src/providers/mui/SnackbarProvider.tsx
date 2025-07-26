import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Snackbar components from schema nodes.
 */
export default class SnackbarProvider implements Provider<SchemaNode> {
  public readonly type = 'Snackbar';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    // Ensure 'open' is always provided (required by MUI)
    const open = typeof props.open === 'boolean' ? props.open : false;
    let child = parsedChildren.length > 0 ? parsedChildren[0] : undefined;
    if (child && !React.isValidElement(child)) {
      child = <span>{child}</span>;
    }
    if (React.isValidElement(child)) {
      return (
        <Snackbar {...props} open={open}>{child}</Snackbar>
      );
    } else {
      return (
        <Snackbar {...props} open={open} />
      );
    }
  }
}
