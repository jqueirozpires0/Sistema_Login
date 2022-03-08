import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Private = () =>{

    const auth = useContext(AuthContext);


    return(
        <div>Page Private</div>
    )
}