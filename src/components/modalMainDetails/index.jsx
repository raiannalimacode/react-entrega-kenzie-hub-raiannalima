import { StylizedFormDetails } from "."
import { TechContext } from "../../providers/TechContext"
import { useContext } from "react";
import { useForm } from "react-hook-form";

export const ModalMainDetails = () => {
    const { techsDetails, updateTech, deleteTech } = useContext(TechContext);
    const { register , handleSubmit } = useForm({});

    const submit = (data) => {
        updateTech(techsDetails.id, data);
    }

    const handleTechs = () => {
       deleteTech(techsDetails.id)
    }

    return (
        <StylizedFormDetails onSubmit={handleSubmit(submit)}>
            <label className="text-06">
                Nome do projeto 
            </label>
            <input type="text" defaultValue={techsDetails.title} readOnly> 
            </input>
            <label className="text-06">
                Status
            </label>
            <select defaultValue={techsDetails.status} {...register("status")}>
                <option value="Iniciante">
                    Iniciante
                </option>
                <option value="Intermediário">
                    Intermediário
                </option>
                <option value="Avançado">
                    Avançado
                </option>
            </select>
            <div className="modal-details-buttons">
                <button type="submit" className="button-06">
                    Salvar alterações
                </button>
                <button type="button" className="button-07" onClick={handleTechs}>
                    Excluir    
                </button>
            </div>
    </StylizedFormDetails>
    )
}