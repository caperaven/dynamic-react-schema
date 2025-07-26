import React from 'react';
import Slider from '@mui/material/Slider';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Slider components from schema nodes.
 */
export default class SliderProvider implements Provider<SchemaNode> {
  public readonly type = 'Slider';

  public parse(node: SchemaNode, _manager: SchemaManager): React.ReactNode {
    const { props = {} } = node;
    return (
      <Slider {...props} />
    );
  }
}
