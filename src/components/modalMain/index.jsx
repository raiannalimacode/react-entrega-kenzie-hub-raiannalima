import { StylizedForm } from "."
import { useContext } from "react";
// import { UserContext } from "../../providers/UserContext";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { zodResolver } from "@hookform/resolvers/zod"
import { formRegisterTechSchema } from "../../pages/dashboard/formRegisterTechSchema.js"

export const ModalMain = ({labelOne, labelTwo}) => {
    // const { user } = useContext(UserContext);
    const { registerTech} = useContext(TechContext);
    // const { register , handleSubmit } = useForm({});

    const { register , handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(formRegisterTechSchema)
    });

    return (
        <StylizedForm onSubmit={handleSubmit(registerTech)}>
            <label className="text-06">
                {labelOne}   
            </label>
            <input type="text" {...register("title")}>
            </input>
            {errors.title ? <span className="text-05">{errors.title.message}</span> : null}
            <label className="text-06">
                {labelTwo}
            </label>
            <select {...register("status")}>
                <option value="Iniciante" defaultValue={"Iniciante"}>
                    Iniciante
                </option>
                <option value="Intermediário">
                    Intermediário
                </option>
                <option value="Avançado">
                    Avançado
                </option>
            </select>
            {/* {errors.status ? <span className="text-05">{errors.status.message}</span> : null} */}
            <button type="submit" className="button-05">
                Cadastrar Tecnologia
            </button>
        </StylizedForm>
    )
}