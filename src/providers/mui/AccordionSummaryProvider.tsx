


import React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI AccordionSummary components from schema nodes.
 */
export default class AccordionSummaryProvider implements Provider<SchemaNode> {
  public readonly type = 'AccordionSummary';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      AccordionSummary,
      props,
      ...parsedChildren
    );
  }
}
