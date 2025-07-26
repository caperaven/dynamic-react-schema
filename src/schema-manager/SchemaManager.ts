import React from 'react';
import type { SchemaNode, Provider } from './types';

/**
 * The `SchemaManager` coordinates parsing of a JSON UI schema into React
 * elements.  It maintains a registry of providers keyed by the `type` of
 * schema node they can handle.  To use it you typically instantiate a
 * `SchemaManager`, register one or more providers, and then call `parse` on
 * your schema.  The manager will throw an error if it encounters a node
 * for which no provider has been registered.
 */
export class SchemaManager {
  /**
   * Registered providers keyed by their `type` identifier.
   */
  private providers: Map<string, Provider> = new Map();

  /**
   * Register a provider with the manager.  Providers are expected to define
   * a `type` property which will be used to look them up during parsing.
   *
   * @param provider A provider instance to register.
   */
  public register(provider: Provider): void {
    this.providers.set(provider.type, provider);
  }

  /**
   * Parse a single schema node into a React element.  If the node specifies
   * children they will be parsed recursively via the manager.  If no
   * provider has been registered for the node's `type` an error is thrown.
   *
   * @param node The schema node to parse.
   * @returns A React element representing this node and its children.
   */
  public parse(node: SchemaNode): React.ReactNode {
    const provider = this.providers.get(node.type);
    if (provider == null) {
      throw new Error(`No provider registered for type \"${node.type}\"`);
    }
    return provider.parse(node, this);
  }

  /**
   * Helper used by providers to parse an array of child nodes.  Providers
   * typically use this to convert the `children` property on a schema
   * node into an array of React elements.
   *
   * @param children The children nodes to parse.
   * @returns An array of React nodes corresponding to the input schema.
   */
  public parseChildren(children?: SchemaNode[]): React.ReactNode[] {
    if (!children || children.length === 0) {
      return [];
    }
    return children.map(child => this.parse(child));
  }
}

// Re‑export the types so consumers can import them from the root of the
// package rather than digging into sub‑modules.
export type { SchemaNode, Provider } from './types';
