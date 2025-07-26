import ButtonProvider from './providers/mui/ButtonProvider';
import ContainerProvider from './providers/mui/ContainerProvider';
import BoxProvider from './providers/mui/BoxProvider';
import TextFieldProvider from './providers/mui/TextFieldProvider';
import TabsProvider from './providers/mui/TabsProvider';
import TabProvider from './providers/mui/TabProvider';
import TabContextProvider from './providers/mui/TabContextProvider';
import TabListProvider from './providers/mui/TabListProvider';
import TabPanelProvider from './providers/mui/TabPanelProvider';
import type { SchemaManager } from './schema-manager/SchemaManager';

export function registerMuiProviders(manager: SchemaManager) {
    manager.register(new ButtonProvider());
    manager.register(new ContainerProvider());
    manager.register(new BoxProvider());
    manager.register(new TextFieldProvider());
    manager.register(new TabsProvider());
    manager.register(new TabProvider());
    manager.register(new TabContextProvider());
    manager.register(new TabListProvider());
    manager.register(new TabPanelProvider());
}
