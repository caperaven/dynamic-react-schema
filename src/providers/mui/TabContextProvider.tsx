
import React from "react";
import TabContext from "@mui/lab/TabContext";
import type { Provider, SchemaNode } from "../../schema-manager/types";
import { SchemaManager } from "../../schema-manager/SchemaManager";

export class TabContextProvider implements Provider<SchemaNode> {
  readonly type = "TabContext";

  parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { children, value, ...props } = node.props || {};
    if (typeof value === "undefined") {
      throw new Error("TabContextProvider requires a 'value' prop.");
    }
    // Render children from schema if present, else from props
    let resolvedChildren = node.children
      ? manager.parseChildren(node.children)
      : children;
    // Add keys to children if more than one child
    if (Array.isArray(resolvedChildren)) {
      resolvedChildren = resolvedChildren.map((child, idx) =>
        React.isValidElement(child) && child.key == null
          ? React.cloneElement(child, { key: idx })
          : child
      );
    }
    return React.createElement(TabContext, { value, ...props }, resolvedChildren);
  }
}

export default TabContextProvider;
