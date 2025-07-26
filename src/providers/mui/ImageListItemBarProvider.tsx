import React from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class ImageListItemBarProvider implements Provider<SchemaNode> {
  public readonly type = 'ImageListItemBar';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return React.createElement(
      ImageListItemBar,
      props
    );
  }
}
