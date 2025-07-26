import React from 'react';
import InputBase from '@mui/material/InputBase';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class InputBaseProvider implements Provider<SchemaNode> {
  public readonly type = 'InputBase';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return React.createElement(
      InputBase,
      props
    );
  }
}
