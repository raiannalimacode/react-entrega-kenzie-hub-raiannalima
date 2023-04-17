import { DashboardHeader } from "../../components/dashboardHeader/index.jsx" 
import { StylezedContainerDashboard } from "./index.js"
// import { useEffect } from "react"
import { ModalRegisterTechnology } from "../../components/modalRegisterTechnology/index.jsx"
import { ModalDetailsTechnology } from "../../components/modalDetailsTechnology/index.jsx"
import { useState } from "react"

import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import { Navigate} from "react-router-dom";

export const DashboardPage = () => {
    const { user } = useContext(UserContext);
    const { isOpenRegister, setIsOpenRegister, isOpenDetails, setIsOpenDetails, setTechsDetails } = useContext(TechContext);
    

    // console.log(user);

    const techs = user?.techs;

    const openModalRegister = () => {
        setIsOpenRegister(true);
    }   

    const openModalDetails = (tech) => {
        setTechsDetails(tech);
        setIsOpenDetails(true);
    }

    return (
        <>
        {
            user ? (
            <StylezedContainerDashboard>
                {isOpenRegister === true ? <ModalRegisterTechnology/> : null} 
                {isOpenDetails === true ? <ModalDetailsTechnology/> : null} 
                <DashboardHeader/>
                <div className="perfil-container">
                    <div className="container">
                        <h2 className="title-02">
                            Olá, {user?.name}
                        </h2>
                        <p className="text-03">
                            {user?.course_module}
                        </p>
                    </div>
                </div>
                <div className="main-container">
                    <div className="container">
                        <h3 className="title-02">
                            Tecnologias
                        </h3>
                        <button type="button" className="button-03" onClick={() => openModalRegister()}>
                            +
                        </button>
                    </div>
                    <section>
                        <div className="container technologies-container">
                            <ul>
                                {
                                    techs?.map((tech) => {
                                        return (
                                            <li key={tech.id} id={tech.id} onClick={() => openModalDetails(tech)}>
                                                <span className="title-03">
                                                    {tech.title}
                                                </span>
                                                <span className="text-06">
                                                    {tech.status}
                                                </span>
                                            </li> 
                                        )
                                    }) 
                                } 
                            </ul>
                        </div>
                    </section>
                </div>
            </StylezedContainerDashboard>
            ) : (<Navigate to='/'/>)
        }
        </>
    )
}



{/* <ul>
{
listTransactions.map((financialData) => {
    console.log(financialData);
    return (
    <Card key={financialData.id}
    financialData = {financialData}
    removeFinancialData = {removeFinancialData} />
    )
})
}
</ul> */}




{/* <ul>
<li onClick={() => openModalDetails()}>
    <span className="title-03">
        React JS
    </span>
    <span className="text-06">
        Intermediário
    </span>
</li>
<li>
    <span className="title-03">
        React JS
    </span>
    <span className="text-06">
        Intermediário
    </span>
</li>
<li>
    <span>
        React JS
    </span>
    <span>
        Intermediário
    </span>
</li>
</ul> */}