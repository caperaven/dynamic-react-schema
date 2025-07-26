import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import type { SchemaNode, Provider } from '../../schema-manager/types';

/**
 * Provider for rendering MUI Autocomplete components from schema nodes.
 */
export default class AutocompleteProvider implements Provider<SchemaNode> {
  public readonly type = 'Autocomplete';

  public parse(node: SchemaNode): React.ReactNode {
    const { props = {} } = node;
    const { options = [], renderInput, label, ...rest } = props;
    // Always pass options, and provide a default renderInput if not supplied
    const inputRender = renderInput || ((params: any) => <TextField {...params} label={label || ''} />);
    return (
      <Autocomplete options={options} renderInput={inputRender} {...rest} />
    );
  }
}
