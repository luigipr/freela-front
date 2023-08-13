import { useNavigate } from "react-router-dom";
import { getServiceById } from "../services/api";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import NavBar from "../components/NavBar";
import styled from "styled-components"


export default function DetailsPage () {

    const { auth, login, user, localUser } = useAuth();
    const [Service, setService] = useState([])
    const { serviceId } = useParams();
    //const {token} = useContext(AuthContext);
    const navigate = useNavigateavigate();
    console.log(auth)
    console.log(user)
    if(!auth) return navigate('/');

    useEffect(() => {
        
        const promise = getServiceById(serviceId, auth)
        promise.then( (answer) => setService(answer.data.rows))
        promise.catch(error => console.log(error.response.data))
    }, []);




    return (
        <Container>
        <NavBar />
        <ShowService>

        </ShowService>
    </Container>
    )
}

const Container = styled.div`
    height: 100vh;
`

const ShowService = styled.div`
    padding-top: 75px;

`