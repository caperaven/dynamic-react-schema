import React, { useState, useCallback } from "react";
import type { Provider, SchemaNode } from "../../schema-manager/types";
import type { SchemaManager } from "../../schema-manager/SchemaManager";

export default class TabsSheetProvider implements Provider<SchemaNode> {
  public readonly type = "TabsSheet";

  public parse(node: SchemaNode, manager: SchemaManager): React.ReactNode {
    const { props = {}, children } = node;
    // Find first tab value for initial state
    let firstTabValue = "1";
    if (children) {
      const tabListNode = children.find(child => child.type === "TabContext")?.children?.find((c: any) => c.type === "Box")?.children?.find((c: any) => c.type === "TabList");
      firstTabValue = tabListNode?.children?.[0]?.props?.value || "1";
    }
    const [value, setValue] = useState(firstTabValue);
    const handleChange = useCallback((_event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    }, []);

    // Recursively inject value and onChange into TabContext and TabList
    function injectProps(nodes: any): any {
      if (!nodes) return nodes;
      return nodes.map((child: any) => {
        if (React.isValidElement(child)) {
          return child;
        }
        if (!child || typeof child !== 'object' || !child.type) {
          return child;
        }
        if (child.type === "TabContext") {
          return manager.parse({
            ...child,
            props: { ...child.props, value },
            children: injectProps(child.children)
          });
        }
        if (child.type === "Box" && child.children) {
          // Flatten and filter children to avoid arrays of React elements
          const processed = child.children.map((grandchild: any) => {
            if (React.isValidElement(grandchild)) {
              return grandchild;
            }
            if (!grandchild || typeof grandchild !== 'object' || !grandchild.type) {
              return grandchild;
            }
            if (grandchild.type === "TabList") {
              return manager.parse({
                ...grandchild,
                props: { ...grandchild.props, onChange: handleChange },
                children: injectProps(grandchild.children)
              });
            }
            // Only parse if it's a schema node
            const injected = injectProps([grandchild]);
            return Array.isArray(injected) ? injected[0] : injected;
          });
          return manager.parse({
            ...child,
            children: processed
          });
        }
        return manager.parse(child);
      });
    }

    // Like ButtonProvider, parse children and return as fragment
    const parsedChildren = injectProps(children);
    return React.createElement(React.Fragment, null, parsedChildren);
  }
}
