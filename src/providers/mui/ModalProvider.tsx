import React from 'react';
import Modal from '@mui/material/Modal';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Modal components from schema nodes.
 */
export default class ModalProvider implements Provider<SchemaNode> {
  public readonly type = 'Modal';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    // Ensure 'open' is always provided (required by MUI)
    const open = typeof props.open === 'boolean' ? props.open : false;
    // Modal requires a single React element as child
    let child = parsedChildren.length > 0 ? parsedChildren[0] : <span />;
    if (!React.isValidElement(child)) {
      child = <span>{child}</span>;
    }
    return (
      <Modal {...props} open={open}>{child}</Modal>
    );
  }
}
