import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class ImageListItemProvider implements Provider<SchemaNode> {
  public readonly type = 'ImageListItem';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      ImageListItem,
      props,
      ...parsedChildren
    );
  }
}
