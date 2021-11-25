/* eslint-disable @typescript-eslint/no-unused-vars */
// configurar router 
import { Router } from './router';
import {FormProvider} from './contexts/FormContext';

const App = () => {
  return (
    <FormProvider>
    <Router />
    </FormProvider>
  );
}

export default App;