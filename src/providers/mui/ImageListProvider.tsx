import React from 'react';
import ImageList from '@mui/material/ImageList';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class ImageListProvider implements Provider<SchemaNode> {
  public readonly type = 'ImageList';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    // Always provide children as a prop to satisfy ImageList's required children prop
    return React.createElement(
      ImageList,
      { ...props, children: parsedChildren.length > 0 ? parsedChildren : React.createElement(React.Fragment) }
    );
  }
}
