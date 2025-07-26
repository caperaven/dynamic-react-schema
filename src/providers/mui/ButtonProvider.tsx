import React from 'react';
import Button from '@mui/material/Button';
import type { SchemaNode, Provider } from '../../schema-manager/types';
import type { SchemaManager } from '../../schema-manager/SchemaManager';

/**
 * Provider for rendering MUI Button components from schema nodes.
 */
export default class ButtonProvider implements Provider<SchemaNode> {
  public readonly type = 'Button';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    // If props.children is defined, use it as the button content, otherwise parse schema children
    let buttonContent: React.ReactNode = undefined;
    if (props && props.children !== undefined) {
      buttonContent = props.children;
    } else {
      const parsedChildren = manager.parseChildren(children);
      buttonContent = parsedChildren;
    }
    // Remove 'children' from props to avoid React warning
    const { children: _omit, ...restProps } = props;
    return (
      <Button {...restProps}>{buttonContent}</Button>
    );
  }
}
