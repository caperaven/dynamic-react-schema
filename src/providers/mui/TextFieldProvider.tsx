import React from 'react';
import TextField from '@mui/material/TextField';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

export default class TextFieldProvider implements Provider<SchemaNode> {
  public readonly type = 'TextField';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return React.createElement(
      TextField,
      props
    );
  }
}
