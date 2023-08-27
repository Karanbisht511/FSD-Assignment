import { Link, Outlet, Navigate } from "react-router-dom"
import { useContext,useEffect } from "react"
import AuthContext from "../context/AuthContext"
import UserDetailsContext from "../context/UserDetailsContext.js"

export default function Home() {

    const { getUserDetails } = useContext(UserDetailsContext)
    const { auth } = useContext(AuthContext)
    const { isAuthenticated } = auth

    useEffect(() => {
        if (isAuthenticated) {
            const token = sessionStorage.getItem("token");
            const customerID = sessionStorage.getItem("customerID");
            getUserDetails(customerID, token)
        }
    }, [])

    if (!isAuthenticated) {
        <Navigate to="/" replace={true} />
    } else {
        return <>
            <Link to="dashboard">Dashboard</Link>
            <Link to="about">About</Link>
            <Link to="team">Team</Link>
            <div>
                <Outlet />
            </div>
        </>
    }
}