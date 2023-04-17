import { FormRegister } from "../../components/formRegister/index.jsx"
import { StylezedContainerRegister } from "."
import { useNavigate } from "react-router-dom"

export const RegisterPage = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <StylezedContainerRegister>
            <div className="register-nav">
                <h1 className="title-01">
                    Kenzie Hub
                </h1>
                <button className="button-03 btn-turn-back" onClick={goBack}>
                    Voltar
                </button>    
            </div>
            <FormRegister/>
        </StylezedContainerRegister>
    )
}