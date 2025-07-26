import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class TooltipProvider implements Provider<SchemaNode> {
  public readonly type = 'Tooltip';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    // Tooltip requires 'title' and 'children' props
    const { title = '', ...restProps } = props;
    let childrenProp: React.ReactElement;
    if (parsedChildren.length === 1 && React.isValidElement(parsedChildren[0])) {
      childrenProp = parsedChildren[0] as React.ReactElement;
    } else if (parsedChildren.length > 1) {
      childrenProp = React.createElement(React.Fragment, {}, ...parsedChildren);
    } else {
      childrenProp = React.createElement(React.Fragment);
    }
    return React.createElement(
      Tooltip,
      { ...restProps, title, children: childrenProp }
    );
  }
}
