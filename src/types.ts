import React from 'react';

/**
 * A single node in a UI schema.  Each node represents a React element to be
 * created.  The `type` property is used to determine which provider should
 * handle this node.  Any properties defined in `props` will be passed to the
 * React element created by the provider.  If the node has children they will
 * be parsed recursively and passed as children to the provider.
 */
export interface SchemaNode {
  /**
   * The key used to look up the provider responsible for rendering this node.
   */
  type: string;
  /**
   * Props to pass directly to the underlying React element.  Note that
   * callbacks or other complex data can be specified here – providers are
   * responsible for passing them to the rendered element.
   */
  props?: Record<string, any>;
  /**
   * Nested schema nodes representing children of this element.  If omitted
   * providers should assume there are no children.
   */
  children?: SchemaNode[];
}

/**
 * A provider knows how to convert a specific type of `SchemaNode` into a
 * React element.  Providers are expected to be classes with a `type`
 * property and a `parse` method.  The manager will call `parse` when
 * encountering a node whose `type` matches the provider's `type`.
 */
export interface Provider<T extends SchemaNode = SchemaNode> {
  /**
   * The type of node this provider can handle.  Must match the `type`
   * property on schema nodes.
   */
  readonly type: string;
  /**
   * Convert a schema node into a React element.  Providers receive the
   * current manager so they can recursively parse child nodes if needed.
   */
  parse(node: T, manager: any): React.ReactNode;
}
