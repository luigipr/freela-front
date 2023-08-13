import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useContext, useEffect, useState } from "react";
import MagaiversLogo from "../components/MagaiversLogo";
import React from 'react';
import { useStates } from "../hooks/useStates";
import { useCities } from "../hooks/useCities";
import axios from "axios";
import { postService } from "../services/api";
import AuthContext from "../contexts/AuthContext";
import useAuth from "../hooks/useAuth";


export default function ServicePage() {
  const { auth, login, user, localUser } = useAuth();
  //const {token} = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(auth)
  console.log(user)
  if(!auth) return navigate('/');
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  //const [selectedOption, setSelectedOption] = useState('');
  const [selectedState, setSelectedState] = useState("")
  //const handleStateUpdate = (e) => { setState(e.target.value)}
  const [selectedCity, setSelectedCity] = useState("");
  // const {states} = useStates();
  // console.log(states)
  // const {cities} = useCities({ uf: state});
  // console.log(cities)
  

 
  useEffect(() => {
    axios 
      .get("https://brasilapi.com.br/api/ibge/uf/v1")
      .then((res) => setState(res.data));  

    
}, []);
  //console.log(selectedState)
  //console.log(selectedCity)


  function selectState(state) {
    setSelectedState(state);
    axios 
    .get(`https://brasilapi.com.br/api/ibge/municipios/v1/${state}`)
    .then((res) => setCity(res.data));  
    }

  function registerService(e) {
    e.preventDefault();
    

    //console.log(state)
    console.log(selectedCity)
    const promise = postService({name, description, image, price, uf: selectedState, city: selectedCity, userId: user.id}, {auth});
    console.log({name, description, image, price, uf: selectedState, city: selectedCity})
    promise.then( resposta => {

      // navegar para pagina home
      navigate('/HomePage');
    });
    promise.catch( err  => {alert(err.response)});

  }

  return (
    <SingUpContainer>
      <form onSubmit={registerService}>
        <Size>
        <MagaiversLogo />
        </Size>
        <Title>Adicionar Serviço</Title>
        <input placeholder="Nome do serviço"  type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input placeholder="Descrição do serviço" type="text" value={description} onChange={ (e) => setDescription(e.target.value)}/>
        <input placeholder="imagem" type="url" value={image} onChange={(e) => setImage(e.target.value)}/>
        <input placeholder="preço" type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
        <div>
          {state && <Botao1  onChange={ (e) => selectState(e.target.value)}>
              {state.map((state) => (
                  <option key={state.id}>{state.sigla}</option>
              ))}
          </Botao1>}
          {/* <Botao onChange={ (e) => setState(e.target.value)}>
              {state.map((state) => (
                  <option>{state.uf}</option>
              ))}
          </Botao> */}

         {city.length > 0 && <Botao2 onChange={(e) => {
          console.log('target', e.target)
          setSelectedCity(e.target.value)}
          }>
              {city.map((city) => (
                  <option value={city.nome} key={city.nome}>{city.nome}</option>
              ))}
          </Botao2>}
          {/* <select value={city} onChange={(e) => setCity(e.target.value)}>
              {cities.map((city) => (
                  <option>{city.nome}</option>
              ))}
          </select> */}
        </div>
        <button >Criar</button>
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
const Title = styled.p`
  color: #fff;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
`

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Seletores = styled.div`
  display: flex;
  
  justify-content: space-between;
`

const Botao1 = styled.select` 
  width: 50px;
  font-size: 20px;
  width:calc(100vw - 85vw);
  border-radius: 5px;
  outline: none;
  border: 1px solid #ccc;
  padding: 15px;
  margin: 1px;
  :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
`

const Botao2 = styled.select`
  width: 80%;
  font-size: 20px;
        width: calc(100vw - 22vw);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
`