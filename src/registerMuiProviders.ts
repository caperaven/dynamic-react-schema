import ButtonProvider from './providers/mui/ButtonProvider';
import ContainerProvider from './providers/mui/ContainerProvider';
import BoxProvider from './providers/mui/BoxProvider';
import TextFieldProvider from './providers/mui/TextFieldProvider';
import type { SchemaManager } from './schema-manager/SchemaManager';
import type { SchemaNode, Provider } from './schema-manager/types';

export function registerMuiProviders(manager: SchemaManager) {
  manager.register(new ButtonProvider());
  manager.register(new ContainerProvider());
  manager.register(new BoxProvider());
  manager.register(new TextFieldProvider());
}
