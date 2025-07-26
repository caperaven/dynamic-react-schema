# Examples

This directory contains example applications demonstrating how to use the
Dynamic React Schema library in a real project.  The `basic-app` example
is a small Vite + React + TypeScript application that loads a schema at
runtime and renders Material‑UI components using the fallback support
built into the `SchemaManager`.

## Running the basic example

The example depends on the built library from this repository.  Follow
these steps to run it locally:

1. Install the root project dependencies:

   ```bash
   npm install
   ```

2. Build the library so that it can be linked into the example:

   ```bash
   npm run build:lib
   ```

3. Change into the example directory and install its dependencies:

   ```bash
   cd examples/basic-app
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   This will launch a Vite dev server and open a browser window.  You
   should see a heading and a Material‑UI button rendered from the
   schema defined in `src/App.tsx`.
