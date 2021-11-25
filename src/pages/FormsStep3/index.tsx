/* eslint-disable @typescript-eslint/no-unused-vars */
import { useHistory, Link } from 'react-router-dom';  
import * as C from './styles';
import {useForm, FormActions} from '../../contexts/FormContext'
import{ Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
  const history = useHistory();
  const {state, dispatch} = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const HandleNextStep = () => {
    if(state.email !== '' && state.github !== '')
      console.log(state);

const HandleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>{
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value
    });

const HandleGithubChange = (e: ChangeEvent<HTMLInputElement>) =>{
      dispatch({
        type: FormActions.setGithub,
        payload: e.target.value
      });
}
}
  return (
    <Theme>
      <C.Container>
      <p>Passo 3/3 {state.currentStep}</p>
      <h1>Show, {state.name}, onde podemos te encontrar?</h1>
      <p>Preencha com seus contatos principais:</p>

      <hr />

     <label>Qual seu e-mail?
     <input
      type="text"
      autoFocus
      value={state.email}
      onChange={HandleEmailChange}
     />

     </label>
     <label>Qual seu GitHub?
     <input
      type="text"
      autoFocus
      value={state.github}
      onChange = {HandleGithubChange}
     />
     
     </label>

     <Link to = "/step" className = "backButton">Voltar</Link>

     <button onClick={HandleNextStep}>Finalizar cadastro.</button>
      </C.Container>
    </Theme>
  );
}}