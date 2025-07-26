// Re‑export the core manager and providers so consumers can do
// `import { SchemaManager, HeaderProvider } from 'dynamic-react-schema';`
export { SchemaManager } from './schema-manager/SchemaManager';
export { default as HeaderProvider } from './providers/HeaderProvider';
export { default as ButtonProvider } from './providers/ButtonProvider';
export type { SchemaNode, Provider } from './schema-manager/types';
