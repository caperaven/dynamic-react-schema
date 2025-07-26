import React from 'react';
import Icon from '@mui/material/Icon';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class IconProvider implements Provider<SchemaNode> {
  public readonly type = 'Icon';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return React.createElement(
      Icon,
      props
    );
  }
}
