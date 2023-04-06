import { StylizedHeader } from "."
import { useNavigate } from "react-router-dom"

export const DashboardHeader = () => {
    const navigate = useNavigate()
    const turnOff = () => {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <StylizedHeader>
            <div className="container">
                <h1 className="title-01">
                    Kenzie Hub
                </h1>
                <button className="button-03" onClick={turnOff}>
                    Sair
                </button>
            </div>
        </StylizedHeader>
    )
}