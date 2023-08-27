import { useEffect, useContext, useState } from "react"
import AuthContext from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
    const { login, auth } = useContext(AuthContext)
    const { authError,navigateToHome } = auth

    const [errors, setErrors] = useState([])
    const [credentials, setCredentials] = useState({
        userID: "",
        password: "",
    })

    const validateForm = () => {
        const { userID, password } = credentials
        let errorList = []
        if (password.length < 8 || password.length > 20) {
            console.log("------password");
            errorList.push("Password should have length between 8 and 20")
        }
        if (userID.length < 8 || userID.length > 20) {
            console.log("------userID")
            errorList.push("userID should have length between 8 and 20")
        }
        return errorList
    }

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
        const errorList = validateForm()
        console.log(errorList)
        if (errorList.length === 0) {
            login(credentials)
        } else {
            setErrors(errorList)
        }
        console.log(authError)
    }



    return <>
        <div>ReactJs</div>
        <h1>iJavascript</h1>
        <div id="errorBar">
            {errors.length > 0 ? errors.map((element, index) => {
                return <p key={index}>{element}</p>
            }) : " "}

            {authError && <p>{authError}</p>}
        </div>
        {navigateToHome && navigate("/home")}
        <div>
            <label htmlFor="userid">User ID </label>
            <input type="text" className="userid" placeholder="Enter User ID" onChange={handleNameChange} />
        </div>
        <div>
            <label htmlFor="Password">Password</label>
            <input type="text" className="Password" placeholder="Enter Password" onChange={handlePasswordChange} />
        </div>
        <button onClick={handleLoginButton}>Login</button>
    </>
}
