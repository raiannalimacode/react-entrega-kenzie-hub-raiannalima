import { DashboardHeader } from "../../components/dashboardHeader/index.jsx" 
import { StylezedContainerDashboard } from "./index.js"
import { useEffect } from "react"

export const DashboardPage = ({user}) => {
    // useEffect(() => {
    //     const getUser = async () => {
    //         try {
    //             const user = await api.get(`/users/${}`)
    //         } catch {

    //         }
    //     }
    //   }, []);

    return (
        <StylezedContainerDashboard>
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
                        Que pena! Estamos em desenvolvimento :(
                    </h3>
                    <p className="text-04">
                        Nossa aplicação está em desenvolvimento, em breve teremos novidades
                    </p>
                </div>
            </div>
        </StylezedContainerDashboard>
    )
}