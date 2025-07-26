


import React from 'react';
import AccordionActions from '@mui/material/AccordionActions';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI AccordionActions components from schema nodes.
 */
export default class AccordionActionsProvider implements Provider<SchemaNode> {
  public readonly type = 'AccordionActions';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      AccordionActions,
      props,
      ...parsedChildren
    );
  }
}
