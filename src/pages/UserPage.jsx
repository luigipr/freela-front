import NavBar from "../components/NavBar";
import styled from "styled-components"
import { Link , useNavigate} from "react-router-dom"
import useAuth from "../hooks/useAuth";
import { useEffect, useState,  } from "react";
import React from 'react';
import axios from "axios";
import { getServices } from "../services/api";
import ServiceCard from "../components/ServiceCard";


export default function UserPage() {
    const { auth, login, user, localUser } = useAuth();
    const [userServices, setUserServices] = useState([[]])
    //const {token} = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(auth)
    console.log(user)
    if(!auth) return navigate('/');
    useEffect(() => {

        const promise = getServices(auth)
        promise.then( (answer) => setUserServices(answer.data))
        promise.catch(error => console.log(error.response.data))

    }, []);



    return (


        <Container>
        <NavBar />
        <Header>           
        </Header>
        <Services>
        {userServices.map(service => (<ServiceCard key={service.id} service={service} />))}
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