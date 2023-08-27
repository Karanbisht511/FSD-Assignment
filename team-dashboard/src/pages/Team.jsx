import { Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"
import { useContext } from "react"

export default function Team() {
    const { auth, logout } = useContext(AuthContext)
    const { isAuthenticated } = auth

    if (!isAuthenticated) {
        <Navigate to="/" replace={true} />
    }
    else {
        return <>
            <h1>Meet the Team</h1>
            <div>
                list of Team Member
            </div>
            <div>Envelope</div>
        </>
    }
}