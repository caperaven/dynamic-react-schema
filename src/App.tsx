import { SchemaManager } from './schema-manager/SchemaManager';
import { registerMuiProviders } from './registerMuiProviders';
import formSchema from './assets/form.json';

function App() {
  const schemaManager = new SchemaManager();
  registerMuiProviders(schemaManager);

  return (
    <>
      {schemaManager.parse(formSchema)}
    </>
  )
}

export default App
