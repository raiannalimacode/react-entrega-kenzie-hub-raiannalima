import { StylizedFormRegister } from "."

import { useNavigate } from "react-router-dom"
import { formRegisterSchema } from "../../pages/register/formRegisterSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { api } from "../../services/api"
import { toast } from "react-toastify";

export const FormRegister = () => {
    const navigate = useNavigate()
    const { register , handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(formRegisterSchema)
    });

    const submit = async (formData) => {
        try {
            await api.post('/users', formData)
            toast.success('Registro feito com sucesso!', {
                autoClose: 4000,
                theme: "dark",
            });
            navigate("/");
        } catch (e) {
            toast.error('Ops! Algo deu errado', {
                autoClose: 4000,
                theme: "dark",
            });
        }
    }
    
    return (
        <StylizedFormRegister onSubmit={handleSubmit(submit)}>
            <fieldset>
                <h2 className="title-02">
                    Crie sua conta
                </h2>
                <p className="text-03">
                    Rápido e grátis, vamos nessa
                </p>
                <label htmlFor="name" className="text-01">
                    Nome
                </label>
                <input type="text" placeholder="Digite aqui seu nome" {...register("name")}></input>
                {errors.name ? <span className="text-05">{errors.name.message}</span> : null}
                <label htmlFor="email" className="text-01">
                    Email
                </label>
                <input type="email" placeholder="Digite aqui seu email" {...register("email")}></input>
                {errors.email ? <span className="text-05">{errors.email.message}</span> : null}
                <label htmlFor="password" className="text-01">
                    Senha
                </label>
                <input type="password" placeholder="Digite aqui sua senha" {...register("password")}></input>
                {errors.password ? <span className="text-05">{errors.password.message}</span> : null}
                <label htmlFor="confirm-password" className="text-01">
                    Confirmar senha
                </label>
                <input type="password" placeholder="Digite novamente sua senha" {...register("confirm")}></input>
                {errors.confirm ? <span className="text-05">{errors.confirm.message}</span> : null}
                <label htmlFor="bio" className="text-01">
                    Bio
                </label>
                <input type="text" placeholder="Fale sobre você" {...register("bio")}></input>
                {errors.bio ? <span className="text-05">{errors.bio.message}</span> : null}
                <label htmlFor="contact" className="text-01">
                    Contato
                </label>
                <input type="text" placeholder="Opção de contato" {...register("contact")}></input>
                {errors.contact ? <span className="text-05">{errors.contact.message}</span> : null}
                <label htmlFor="module" className="text-01">
                    Selecionar módulo
                </label>
                <select {...register("course_module")}>
                    <option value="Primeiro módulo (Introdução ao Frontend)" defaultValue={"Primeiro módulo (Introdução ao Frontend)"}>
                        Primeiro módulo (Introdução ao Frontend)
                    </option>
                    <option value="Segundo módulo (Frontend Avançado)">
                        Segundo módulo (Frontend Avançado)
                    </option>
                    <option value="Terceiro módulo (Introdução ao Backend)">
                        Terceiro módulo (Introdução ao Backend)    
                    </option>
                    <option value="Quarto módulo (Backend Avançado)">
                        Quarto módulo (Backend Avançado)
                    </option>
                </select>
                {errors.course_module ? <span className="text-05">{errors.course_module.message}</span> : null}
                <button type="submit" className="button-04">
                    Cadastrar
                </button>
            </fieldset>
        </StylizedFormRegister>
    )
}