import { useNavigate, useParams } from "react-router-dom";
import { getServiceById } from "../services/api";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components"
import React  from "react";
import dayjs from "dayjs";

export default function DetailsPage () {

    const { auth, login, localUser } = useAuth();
    const [details, setDetails] = useState([])
    const  serviceId  = useParams();
    
    //console.log(serviceId)
    console.log(serviceId)
    const {id} = serviceId;
    console.log(id)
    //console.log(id)
    //const [user, setUser] = useState([])
    //const {token} = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(auth)
    
    if(!auth) return navigate('/');

    useEffect(() => {
        

        const promise = getServiceById(id, auth)
        promise.then( (answer) => {
            setDetails(answer.data);
            console.log(answer.data)})
        promise.catch(error => console.log(error.response.data))
        //console.log(serviceId.id)


    }, [id]);


    console.log(details)
    const {username, description, image, price, uf, city, userId, createdAt, phone, lastName, servicename,  } = details
    console.log(name, description, image, price, uf, city, userId, createdAt)
    //const {user} = service.user
    //console.log(user)

    return (
        <Container>
        <NavBar />
        <Center>
        <ShowService>                         
                <h1>{servicename} - {price}</h1>
                <img src={image} alt="foto do serviço" />
            
                <p>{description}</p>
                <p>{uf} - {city}</p>
                <p>criado em: {createdAt}</p>
            
                <p>responsavel: {username} {lastName}</p>
                <p>contato: {phone}</p> 
            
        </ShowService>
        </Center>
    </Container>
    )
}

const Center = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 110px;


`
const User = styled.div`
        display: flex;
    flex-direction:column;
    align-items: center;
`

const Container = styled.div`
    height: 100vh;
`

const ShowService = styled.div`
    height: 70vh;
    width:70vw;
    margin-top: 150px;
    display: flex;
    flex-direction:column;
    background: #fff;
    border-radius: 15px;
    margin-top: 7px;
    margin-bottom: 7px;
    display: flex;
    justify-content:center;
    align-items: center;
    h1 {
        color: #000;
        padding-bottom:15px;
    }
    p {
        padding: 5px;
    }
    img {
        height: 400px;
    }
`
