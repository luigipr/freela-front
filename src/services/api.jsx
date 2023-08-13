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
    console.log(BASE_URL)
    const promise = axios.post(`${BASE_URL}/cadastro`, body);
    console.log(body)
    return promise;
  }

  export function postService(body, token) {
    console.log(token.auth, body)
    const config = createConfig(token.auth);
    console.log(config)


    const promise = axios.post(`${BASE_URL}/novoservico`, body,config)

    return promise;
  }

export function getServices(token) {
    const config = createConfig(token)

    const promise = axios.get(`${BASE_URL}/home`, config)

    return promise;
}

export function getServiceById(id, token) {
  const config = createConfig(token)

  const promise = axios.get(`${BASE_URL}/details/${id}`, config)

  return promise;

}