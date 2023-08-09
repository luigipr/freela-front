import styled from "styled-components"
import { Link , useNavigate} from "react-router-dom"
import useAuth from "../hooks/useAuth";
import {signIn} from "../services/api";
import { useState, useEffect, useContext } from "react";
import React from 'react';
import MagaiversLogo from "../components/MagaiversLogo";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { auth, login, setUser, localUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth && auth.token) {
          navigate("/home");
        }
    }, []);


    function logUser(e) {
        e.preventDefault();
    
        const user = {email, password};
    
        const promise = signIn(user);
    
        promise.then( response => {
        localUser(response.data.user)
        login(response.data.token);
        // navegar para pagina de entrada
        navigate('/home');
        });
        promise.catch( err  => alert(err.response.data.message));
      }
    
      return (
        <SingInContainer>
          <form onSubmit={logUser}>
            <MagaiversLogo />
            <input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button >Entrar</button>
          </form>
    
          <Link to={'/cadastro'}>
            Primeira vez? Cadastre-se!
          </Link>
        </SingInContainer>
    )
}
    
    const SingInContainer = styled.section`
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `