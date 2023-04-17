import { useForm } from "react-hook-form";
import { StylizedForm } from "."
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const FormLogin = () => {
    const { setUser } = useContext(UserContext)
    const { register , handleSubmit } = useForm();
    const navigate = useNavigate();

    const submit = async (formData) => {
        try {
            const { data } = await api.post('/sessions', formData);
            localStorage.setItem('@tokenUser', data.token);
            api.defaults.headers.authorization = `Bearer ${data.token}`;
            setUser(data.user);
            toast.success('Login feito com sucesso!', {
                autoClose: 4000,
                theme: "dark",
            });
            navigate("/dashboard");
        } catch (e) {
            toast.error('Ops! Algo deu errado', {
                autoClose: 4000,
                theme: "dark",
            });
        }
    }

    const goRegister = () => {
        navigate("/register");
    }

    return (
        <StylizedForm onSubmit={handleSubmit(submit)}>
            <fieldset>
                <h2 className="title-02">
                    Login
                </h2>
                <label htmlFor="email" className="text-01">
                    Email
                </label>
                <input type="email" {...register("email")}></input>
                <label htmlFor="password" className="text-01">
                    Senha
                </label>
                <input type="password" {...register("password")}/>
                <button type="submit" className="button-01">
                    Entrar
                </button>
                <p className="text-02">
                    Ainda não possui uma conta?
                </p>
                <button className="button-02" onClick={goRegister}>
                    Cadastre-se
                </button>
            </fieldset>
        </StylizedForm>
    )
}
