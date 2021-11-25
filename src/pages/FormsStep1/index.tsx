/* eslint-disable @typescript-eslint/no-unused-vars */
import { useHistory } from 'react-router-dom';  
import * as C from './styles';
import {useForm, FormActions} from '../../contexts/FormContext'
import{ Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
  const history = useHistory();
  const {state, dispatch} = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const HandleNextStep = () => {
    if(state.name !== ''){
      history.push('/step2');
    } else {
      alert("Digite o seu nome para prosseguir.");
    }
    history.push('/step2');
  }

const HandleNameChange = (e: ChangeEvent<HTMLInputElement>) =>{
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
}

  return (
    <Theme>
      <C.Container>
      <p>Passo 1/3 {state.currentStep}</p>
      <h1>Vamos começar com seu nome</h1>
      <p>Preencha o campo abaixo com o seu nome completo:</p>

      <hr />

     <label>Seu nome completo
     <input
      type="text"
      autoFocus
      value={state.name}
      onChange={HandleNameChange}
     />
     </label>

     <button onClick={HandleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
}