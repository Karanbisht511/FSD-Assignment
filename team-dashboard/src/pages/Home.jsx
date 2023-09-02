import { Link, Outlet, Navigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import AuthContext from "../context/AuthContext"
import UserDetailsContext from "../context/UserDetailsContext.js"
import Brand from "./Brand"
import "./home.css"

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
            <div className="home">
              
                <div className="main_container">
                <Brand />
                    <div className="navigation common_width">
                        <Link  className="nav_links" to="dashboard">Dashboard</Link>
                        <Link className="nav_links" to="about">About</Link>
                        <Link className="nav_links" to="team">Team</Link>
                    </div>
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    }
}
