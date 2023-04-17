import { ModalHeader } from "../modalHeader/index.jsx"
import { StylizedDetailsRegister } from "./index.js"
import { ModalMainDetails } from "../modalMainDetails/index.jsx"
import { TechContext } from "../../providers/TechContext";
import { useContext } from "react";

export const ModalDetailsTechnology = () => {
    const { setIsOpenDetails} = useContext(TechContext);

    const closeModalDetails = () => {
        setIsOpenDetails(false);
    }   

    return (
        <StylizedDetailsRegister>
            <div className="modal-container">
                <ModalHeader>
                        <h3 className="title-04">
                            Tecnologia Detalhes
                        </h3>
                        <button onClick={closeModalDetails}>
                            X
                        </button>
                </ModalHeader>
                <ModalMainDetails>
                </ModalMainDetails>
            </div>
        </StylizedDetailsRegister>
    )
}