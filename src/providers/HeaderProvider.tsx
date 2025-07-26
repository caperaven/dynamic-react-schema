import React from 'react';
import { SchemaNode, Provider } from '../types';
import type { SchemaManager } from '../SchemaManager';

/**
 * Provider for rendering heading elements.  It expects a schema node with
 * `type: 'Header'` and accepts the following props:
 *
 * - `text`: string – if provided this will be used as the text content of
 *   the heading.  If omitted the manager will render any nested schema
 *   nodes as children.
 * - Any other props will be passed directly to the `<h1>` element (e.g.
 *   `className`, `style`).
 */
export default class HeaderProvider implements Provider<SchemaNode> {
  public readonly type = 'Header';

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    // Extract `text` from props but leave the rest to spread on the element.
    const { text, ...restProps } = props as { text?: string } & Record<string, any>;
    // Recursively parse child nodes if no `text` is provided.  If both text
    // and children are provided the text will be rendered first followed by
    // the parsed children.
    const parsedChildren = manager.parseChildren(children);
    return React.createElement(
      'h1',
      restProps,
      ...(text != null ? [text] : []),
      ...parsedChildren
    );
  }
}
