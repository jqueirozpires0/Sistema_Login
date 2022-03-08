import { keyboardOptions } from "@testing-library/user-event/dist/keyboard";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth/AuthContext";

export const Login = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password)
            if (isLogged) {
                navigate('/');
            }
            else {
                alert("falhou")
            }
        }
    }

return (
    <div>
        <h2> Page fechada </h2>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Informe seu email" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Informe sua senha" />

        <button onClick={handleLogin}> Logar </button>
    </div>
);
}