import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const userKey = localStorage.getItem("@tokenUser");
    
    api.defaults.headers.authorization = `Bearer ${userKey}`;

    if (userKey) {
      const autoLogin = async () => {
        try {
          const { data } = await api.get('/profile');
          console.log(data)
          setUser(data);
          navigate('/dashboard');
        } catch (e) {
          localStorage.clear()
        }
      }
      autoLogin();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
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