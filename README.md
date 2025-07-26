# Dynamic React Schema

This repository contains a very small proof‑of‑concept library that emulates the
behaviour of the [`crs‑schema`](https://github.com/caperaven/crs-schema) project
but for React.  Instead of generating static HTML strings, it reads a JSON
schema at runtime and produces React elements on the fly.  Each element in
the schema is handled by a **provider**.  Providers are pluggable classes that
know how to turn a particular type of schema node into a React component.

## Features

* **Runtime schema parsing** – define your user interface as a JSON document and
  render it without writing JSX.
* **Provider based** – register providers for each element type you want to
  support (e.g. `Header`, `Button`).  Providers return React elements.
* **TypeScript** – the library is written in TypeScript and exports type
  definitions for use in your own projects.

## Example

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SchemaManager } from 'dynamic-react-schema';
import HeaderProvider from 'dynamic-react-schema/dist/providers/HeaderProvider';
import ButtonProvider from 'dynamic-react-schema/dist/providers/ButtonProvider';

// Define a simple JSON schema describing your UI.
const template = {
  type: 'Header',
  props: { text: 'Hello, schema world!' },
  children: [
    {
      type: 'Button',
      props: { label: 'Click me', onClick: () => alert('Clicked!') }
    }
  ]
};

// Create and configure the schema manager.
const manager = new SchemaManager();
manager.register(new HeaderProvider());
manager.register(new ButtonProvider());

// Parse the schema into React elements.
const element = manager.parse(template);

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(element);
```

See the `src/` folder for the implementation.  The core pieces are:

* [`src/types.ts`](./src/types.ts) – defines the `SchemaNode` interface used
  throughout the library.
* [`src/SchemaManager.ts`](./src/SchemaManager.ts) – keeps a registry of
  providers and exposes a `parse` method to convert a schema into React nodes.
* [`src/providers/HeaderProvider.tsx`](./src/providers/HeaderProvider.tsx) – an
  example provider that renders a `<h1>` element.
* [`src/providers/ButtonProvider.tsx`](./src/providers/ButtonProvider.tsx) – an
  example provider that renders a `<button>` element.

The project is minimal by design: it illustrates how you might build a
provider‑based schema parser for React.  Feel free to extend it with more
providers (for images, inputs, layout components, etc.) and add your own
features such as prop validation, event wiring, or conditional logic.

## Building

```
npm install
npm run build
```

This will compile the TypeScript in `src/` into the `dist/` folder.

## License

MIT
