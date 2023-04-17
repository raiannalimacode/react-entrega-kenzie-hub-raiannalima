import { ModalHeader } from "../modalHeader/index.jsx"
import { StylizedModalRegister } from "./index.js"
import { ModalMain } from "../modalMain/index.jsx"
import { TechContext } from "../../providers/TechContext";
import { useContext } from "react";

export const ModalRegisterTechnology = () => {
    const { setIsOpenRegister} = useContext(TechContext);

    const closeModalRegister = () => {
        setIsOpenRegister(false);
    }   

    return (
        <StylizedModalRegister>
            <div className="modal-container">
                <ModalHeader>
                    <h3 className="title-04">
                        Cadastrar Tecnologia
                    </h3>
                    <button onClick={closeModalRegister}>
                        X
                    </button>
                </ModalHeader>
                <ModalMain labelOne={'Nome'} labelTwo={'Selecionar status'}>
                </ModalMain>
            </div>
        </StylizedModalRegister>
    )
}