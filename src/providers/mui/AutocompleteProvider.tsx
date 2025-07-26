import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Autocomplete components from schema nodes.
 */
export default class AutocompleteProvider implements Provider<SchemaNode> {
  public readonly type = 'Autocomplete';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const { options = [], renderInput, label, ...rest } = props;
    const inputRender = renderInput || ((params: any) => React.createElement(TextField, { ...params, label: label || '' }));
    const parsedChildren = manager?.parseChildren ? manager.parseChildren(children) : [];
    return React.createElement(
      Autocomplete,
      { options, renderInput: inputRender, ...rest },
      ...parsedChildren
    );
  }
}
