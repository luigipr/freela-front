import { useEffect, useState } from "react";



export const useCities = ({uf}) => {
    const [Cities, setCities] = useState([]);

    useEffect(() => {
        fetch(`https://brasilapi.com.br/api/ibge/uf/${uf}`).then((response) => response.json()).then((data) => setCities(data))
    }, [uf])
    return {Cities}
}