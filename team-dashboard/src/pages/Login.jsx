import "./login.css"
import { useContext, useState } from "react"
import AuthContext from "../context/AuthContext"
import { Navigate } from "react-router-dom";
import Brand from "./Brand";

export default function Login() {
    const { login, auth } = useContext(AuthContext)
    const { authError, navigateToHome } = auth

    const [errors, setErrors] = useState({})
    const [credentials, setCredentials] = useState({
        userID: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name + "  " + value);
        setCredentials(prevElement => (
            { ...prevElement, [name]: value }
        ))
    }

    const validateForm = (data) => {
        console.log(credentials);
        const errors = {}
        const { password, userID } = data
        if (password.length < 8 || password.length > 20) {
            errors.password = "Error! Password should have length between 8 and 20"
        }
        if (userID.length < 8 || userID.length > 20) {
            errors.userID = "Error! UserID should have length between 8 and 20"
        }
        return errors
    }

    const handleLoginButton = () => {
        setErrors({})
        const validationErrors = validateForm(credentials)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }
        login(credentials)
    }

    return <div id="login_container">

        <div className="login_wrapper">
            <Brand />
            <div id="errorBar">
                {authError && <p> {authError} </p>}
                {(errors.userID || errors.password) && <p>Please enter login credentials to continue</p>}
                {errors.userID && <p>{errors.userID}</p>}
                {errors.password && <p>{errors.password}</p>}
            </div>

            {navigateToHome && <Navigate to="/home" replace={true} />}
            <div className="login_form">
                <div className="credential_wrapper">
                    <div id="userId_label" className="label">
                        <label htmlFor="userid">User ID </label>
                    </div>
                    <div>
                        <input type="text" className="credential userid" name="userID" placeholder="Enter User ID" onChange={handleChange} />
                    </div>
                </div>
                <div className="credential_wrapper">
                    <div id="password_label" className="label">
                        <label htmlFor="Password">Password</label>
                    </div>
                    <div>
                        <input type="password" className="credential password" name="password" placeholder="Password" onChange={handleChange} />
                    </div>
                </div>
            </div>
            <button className="login_btn" onClick={handleLoginButton}>Log In</button>
        </div>
    </div>
}
