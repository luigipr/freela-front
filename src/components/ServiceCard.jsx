import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ServiceCard({service}) {
    const { auth, login, user, localUser } = useAuth();
    const {id, name, description, image, price, uf, city} = service
    const navigate = useNavigate();

    function details(id) {
        navigate(`/detalhes/${id}`);

    }

return (
    <ListServiceContainer key={id} onClick={() => details(id)}>
        <div>
            <img src={image} alt="foto do serviço" />
            
        </div>
        <strong>{name} - {price}</strong>
       <p>{uf} - {city}</p>
    </ListServiceContainer>
)}

const ListServiceContainer = styled.div`
    width: 49%;
    display: flex;
    flex-direction:column;
    background: #fff;
    border-radius: 15px;
    margin-top: 7px;
    margin-bottom: 7px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    img {
        height: 120px;
        width: 140px;
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    strong{
        font-weight: 800;
        padding-top: 10px;
    }
    p{
        padding-top: 10px;
    }
`