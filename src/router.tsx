import {BrowserRouter, Route} from 'react-router-dom';

import {FormStep1} from './pages/FormsStep1';
import {FormStep2} from './pages/FormsStep2';
import {FormsStep3} from './pages/FormsStep3';


export const Router = () => {
return (
  <BrowserRouter>
      <Route path = "/" exact component = {FormStep1} />
      <Route path = "/step2" component = {FormStep2} />
      <Route path = "/step3" component = {FormsStep3} />
  </BrowserRouter>
);
}