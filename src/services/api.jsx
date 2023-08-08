import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export function signIn(body) {
    const promise = axios.post(`${BASE_URL}`, body);
  
    return promise;
  }
  
export function signUp(body) {
    const promise = axios.post(`${BASE_URL}/cadastro`, body);
  
    return promise;
  }