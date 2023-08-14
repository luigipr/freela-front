import NavBar from "../components/NavBar";
import styled from "styled-components"
import { Link , useNavigate} from "react-router-dom"
import useAuth from "../hooks/useAuth";
import { useEffect, useState,  } from "react";
import React from 'react';
import axios from "axios";
import {getServicesByUserId } from "../services/api";
import ServiceUserCard from "../components/ServiceUserCard";


export default function UserPage() {
    const { auth, login, user, localUser } = useAuth();
    const [userServices, setUserServices] = useState([[]])
    //const {token} = useContext(AuthContext);
    console.log(user)
    const id = user.id
    console.log(user.id)
    const navigate = useNavigate();
    console.log(auth)
    console.log(user)

    if(!auth) return navigate('/');
    useEffect(() => {

        const promise = getServicesByUserId(id, auth)
        promise.then( (answer) => setUserServices(answer.data))
        promise.catch(error => console.log(error.response.data))

    }, []);

    console.log(userServices)

    return (
        <Container>
        <NavBar />
        <Header>           
        </Header>
        <Services>
        {userServices.map(service => (<ServiceUserCard key={service.id} service={service} />))}
        {userServices.length < 1 &&
            <NoServices>
                <p>
                    Ainda Não Existe serviço disponível
                </p>
            </NoServices>
        } 
        </Services>
    </Container>

    )
}

const Container = styled.div`
    height: 100vh;
    
`

const Header = styled.div`
    padding-top: 75px;

`
const NoServices = styled.div`
    align-self: center;
    padding: 0 15px;
    width: 338px;
    margin-top: 25px;
        p {
            font-size: 18px;
            color: #666666;
        }`

const Services = styled.div`
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    
`