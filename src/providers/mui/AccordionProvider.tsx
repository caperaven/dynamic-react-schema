


import React from 'react';
import Accordion from '@mui/material/Accordion';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Accordion components from schema nodes.
 */
export default class AccordionProvider implements Provider<SchemaNode> {
  public readonly type = 'Accordion';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    // Always provide children as a prop to satisfy Accordion's required children prop
    // Always provide at least an empty fragment as children to satisfy Accordion's required children prop and type constraints
    return React.createElement(
      Accordion,
      { ...props, children: parsedChildren.length > 0 ? parsedChildren : <></> }
    );
  }
}
