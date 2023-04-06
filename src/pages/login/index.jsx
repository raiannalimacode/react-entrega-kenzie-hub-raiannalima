import { FormLogin } from "../../components/formLogin/index.jsx"
import { StylezedContainerLogin } from "./index.js"

export const LoginPage = ({ setUser }) => {
    return (
        <StylezedContainerLogin>
            <h1 className="title-01">
                Kenzie Hub
            </h1>
            <FormLogin setUser={setUser}/>
        </StylezedContainerLogin>
    )
}