/* eslint-disable @typescript-eslint/no-unused-vars */
import {useHistory, Link} from 'react-router-dom';  
import * as C from './styles';
import {useForm, FormActions} from '../../contexts/FormContext'
import{ Theme } from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react';
import {SelectOption} from '../../components/SelectOption';

export const FormStep2 = () => {
  const history = useHistory();
  const {state, dispatch} = useForm();


  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const HandleNextStep = () => {
    if(state.name !== ''){
      history.push('/step3');
    } else {
      alert("Preencha os dados.");
    }
  
    const setLevel = (level: number) => {
      dispatch({
        type: FormActions.setLevel,
        payload: setLevel
      });

const HandleNameChange = (e: ChangeEvent<HTMLInputElement>) =>{
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
}

  return (
    <Theme>
      <C.Container>
      <p>Passo 2/3 {state.currentStep}</p>
      <h1>{state.name}, o que melhor descevre você?</h1>
      <p>Escolha a opção que faz mais sentido para o seu momento atual:</p>

      <hr />

      <SelectOption 
      title = "Sou iniciante"
      description = "Comecei a programar a menos de 2 anos."
      selected = {state.level === 0}
      onClick= {() => setLevel(0)}
     />

     <SelectOption 
      title = "Sou programador"
      description = "Já programo a dois anos ou mais."
      selected = {state.level === 1}
      onClick= {() => setLevel(1)}
           />

    <Link to = "/" className = "backButton">Voltar</Link>

     <button onClick={HandleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
}}}