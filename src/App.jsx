import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import React from 'react'
//import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import UserPage from "./pages/UserPage"
import ServicePage from "./pages/ServicePage"
import DetailsPage from "./pages/DetailsPage"

export default function App() {
  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/perfil/:id" element={<UserPage/>} />
          <Route path='/home' element={<HomePage />} />
          <Route path="/novoservico" element={<ServicePage />} />
          <Route path='/detalhes/:id' element={<DetailsPage/>} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #000;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
