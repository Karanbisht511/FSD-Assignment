import { useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";

export default function AuthState(props) {
  const state = {
    isAuthenticated: undefined,
    navigateToHome: false,
    authError: false,
  };

  const [auth, setAuth] = useState(state);

  const login = async (credentials) => {
    const { userID, password } = credentials;
    try {
      await axios
        .post("https://fsd-team.onrender.com/users/login", {
          userID,
          password,
        })
        .then((response) => {
          console.log(response);
          console.log(response);
          const { token, isUserAuthenticated, customerID } = response.data;

          sessionStorage.setItem("token", token);
          sessionStorage.setItem("customerID", customerID);

          setAuth((prev) => ({
            ...prev,
            isAuthenticated: isUserAuthenticated,
            navigateToHome: true,
          }));
        });
    } catch (error) {
      // console.log(error);
      const { message } = error?.response?.data;
      console.log(message);
      setAuth((prev) => ({
        ...prev,
        authError: message,
      }));
    }
  };

  const logout = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const config = {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "application/json",
        },
      };
      const response = await axios.get("/users/logout", config);
      console.log(response);
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("customerID");
      setAuth({
        loggedIn: false,
        isAuthenticated: false,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
