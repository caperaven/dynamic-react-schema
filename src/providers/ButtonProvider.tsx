import React from 'react';
import type { SchemaNode, Provider } from '../schema-manager/types';
import type { SchemaManager } from './../schema-manager/SchemaManager';

/**
 * Provider for rendering button elements.  It expects a schema node with
 * `type: 'Button'`.  The provider supports the following props:
 *
 * - `label`: string – if provided this will be used as the button's text.
 *   If omitted the manager will render any nested schema nodes as children.
 * - Any other props (e.g. `onClick`, `className`, `style`) will be passed
 *   directly to the underlying `<button>` element.
 */
export default class ButtonProvider implements Provider<SchemaNode> {
  public readonly type = 'Button';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    const { label, ...restProps } = props as { label?: string } & Record<string, any>;
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      'button',
      restProps,
      ...(label != null ? [label] : []),
      ...parsedChildren
    );
  }
}
