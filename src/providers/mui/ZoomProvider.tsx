import React from 'react';
import Zoom from '@mui/material/Zoom';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class ZoomProvider implements Provider<SchemaNode> {
  public readonly type = 'Zoom';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    let childrenProp: React.ReactElement;
    if (parsedChildren.length === 1 && React.isValidElement(parsedChildren[0])) {
      childrenProp = parsedChildren[0] as React.ReactElement;
    } else if (parsedChildren.length > 1) {
      childrenProp = React.createElement(React.Fragment, {}, ...parsedChildren);
    } else {
      childrenProp = React.createElement(React.Fragment);
    }
    return React.createElement(
      Zoom,
      { ...props, children: childrenProp }
    );
  }
}
