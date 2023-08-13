import { useEffect, useState } from "react";



export const  useStates = () => {
    const [states, setStates] = useState([]);

    useEffect( () => {
        const promise = axios.get('https://brasilapi.com.br/api/ibge/uf/v1')
        
        //axios.get('https://brasilapi.com.br/api/ibge/uf/v1').then((response) => response.json()).then((data) => setStates(data))
        promise.then((res) => res.json()).then((data) => setStates(data))
        console.log(states)
    }, [])
    console.log("oi", states)
    return {states}
}