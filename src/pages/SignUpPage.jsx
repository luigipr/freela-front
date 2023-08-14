import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import {signUp} from "../services/api";
import { useState } from "react";
import MagaiversLogo from "../components/MagaiversLogo";
import React from 'react';

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [picture, setPicture] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const navigate = useNavigate();

  function registerUser(e) {
    e.preventDefault();
    
    const promise = signUp({name, lastName, email,phone, password, confirmPassword});
    
    promise.then( resposta => {

      alert('Você foi cadastrado com sucesso!');  
      // navegar para pagina de login
      navigate('/');
    });
    promise.catch( err  => {alert(err.response.data.message)});

  }

  return (
    <SingUpContainer>
      <form onSubmit={registerUser}>
        <Size>
          <MagaiversLogo />
        </Size>
        <input placeholder="Nome"  type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input placeholder="Último sobrenome" type="text" value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
        <input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="Telefone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <input placeholder="Senha"  type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input placeholder="Confirme a senha" type="password" autoComplete="new-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        
        
        <button data-test="sign-up-submit" >Cadastrar</button>
      </form>

      <Link to={'/'}>
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}

const Size = styled.div`
  height: 300px;
  overflow: hidden;
`


const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`