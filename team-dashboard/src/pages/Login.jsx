import "./login.css"

import { useEffect, useContext, useState } from "react"
import AuthContext from "../context/AuthContext"
import { useNavigate } from "react-router-dom";
import Brand from "./Brand";

export default function Login() {
    const navigate = useNavigate()
    const { login, auth } = useContext(AuthContext)
    const { authError, navigateToHome, isAuthenticated, invalidForm } = auth

    const [errors, setErrors] = useState([])
    const [credentials, setCredentials] = useState({
        userID: "",
        password: "",
    })

    const handleNameChange = (e) => {
        console.log(e.target.value)
        const input = e.target.value
        setCredentials(prevElement => (
            { ...prevElement, userID: input }
        ))
    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        const input = e.target.value
        setCredentials(prevElement => ({ ...prevElement, password: input }))
    }

    const handleLoginButton = () => {
        login(credentials)
    }

    return <div id="login_container">
        
        <div className="login_wrapper">
        <Brand />
            <div id="errorBar">
                {authError && <p> {authError} </p>}
            </div>

            {navigateToHome && navigate("/home")}
            <div className="login_form">
                <div className="credential_wrapper">
                    <div>
                        <label htmlFor="userid">User ID </label>
                    </div>
                    <div>
                        <input type="text" className="credential userid" placeholder="Enter User ID" onChange={handleNameChange} />
                    </div>
                </div>
                <div className="credential_wrapper">
                    <label htmlFor="Password">Password</label>
                    <input type="text" className="credential password" placeholder="Password" onChange={handlePasswordChange} />
                </div>
            </div>
            <button className="login_btn" onClick={handleLoginButton}>Log In</button>
        </div>
    </div>
}
