import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [isOpenRegister, setIsOpenRegister] = useState(false);
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [techsDetails, setTechsDetails] = useState({});

  const { setUser } = useContext(UserContext);

  // const navigate = useNavigate();

  // const userKey = localStorage.getItem("@tokenUser");

  const registerTech = async (formData) => {
    try {
        await api.post('/users/techs', formData);
        toast.success('Registro feito com sucesso!', {
            autoClose: 4000,
            theme: "dark",
        });
        showUser()
        setIsOpenRegister(false)
    } catch (e) {
      console.error(e);
        toast.error('Ops! Você já criou uma tecnologia com esse nome.', {
            autoClose: 4000,
            theme: "dark",
        });
    }
}

const showUser = async () => {
  try {
    const { data } = await api.get('/profile');
    setUser(data);
  } catch (e) {
    console.log(e);
  }
}

const updateTech = async (id, status) => {
  try {
    const { data } = await api.put(`/users/techs/${id}`, status);
    toast.success('Tecnologia editada com sucesso!', {
      autoClose: 4000,
      theme: "dark",
  });
    showUser()
    setIsOpenDetails(false);
  } catch (e) {
    toast.error('Ops! Faltou mudar o status da tecnologia.', {
      autoClose: 4000,
      theme: "dark",
  });
  }
}  

const deleteTech = async (id) => {
  try {
    const { data } = await api.delete(`/users/techs/${id}`);
    toast.success('Tecnologia deletada com sucesso!', {
      autoClose: 4000,
      theme: "dark",
  });
    showUser()
    setIsOpenDetails(false);
  } catch (e) {
    console.error(e);
  }
}  

  return (
    <TechContext.Provider value={{ isOpenRegister, setIsOpenRegister, isOpenDetails, setIsOpenDetails, registerTech, techsDetails, setTechsDetails, updateTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};








// fetch("https://kenziehub.herokuapp.com/profile", {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${userKey}`
//         }
//         })
//         .then((response) => response.json())
//         .then((response) => setUser(response))
//         .catch((err) => localStorage.clear());
//         // setAutoLogin(true);