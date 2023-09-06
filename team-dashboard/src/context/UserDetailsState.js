import { useState } from "react";
import UserDetailsContext from "./UserDetailsContext";
import axios from "axios";

export default function UserDetailsState(props) {
  const state = {
    customer: {
      id: "",
      name: "",
      last_login: "",
      balance: "",
      transaction: [
        {
          date: "",
          desc: "",
          amount: "",
        },
      ],
    },
  };

  const [userDetails, setUserDetails] = useState(state);

  const getUserDetails = async (customerID, token) => {
    console.log(sessionStorage);
    console.log(`${customerID}+++++++++${token}`);
    try {
      const config = {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "application/json",
        },
      };

      const response = await axios.get("http://localhost:8000/users/retrieveUserDetails", config);
      console.log(response);
      setUserDetails(response.data.customer);
    } catch (error) {
      console.log(error);
    }
  };

  const getDatesInfo = (input) => {
    const transDate = new Date(input);
    const mm = transDate.getMonth();
    const dd = transDate.getDate();
    const yyyy = transDate.getFullYear();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "Jul",
      "Au",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return { dd, mm: monthNames[mm], yyyy };
  };

  return (
    <UserDetailsContext.Provider
      value={{ userDetails, getUserDetails, getDatesInfo }}
    >
      {props.children}
    </UserDetailsContext.Provider>
  );
}
