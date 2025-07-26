


import React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI AccordionDetails components from schema nodes.
 */
export default class AccordionDetailsProvider implements Provider<SchemaNode> {
  public readonly type = 'AccordionDetails';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      AccordionDetails,
      props,
      ...parsedChildren
    );
  }
}
