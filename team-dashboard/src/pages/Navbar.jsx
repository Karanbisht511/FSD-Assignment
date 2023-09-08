import { NavLink } from "react-router-dom"

export default function Navbar() {
    return <>
        <NavLink id="nav_dashboard" className="nav_links" to="dashboard">Dashboard</NavLink>
        <NavLink id="nav_about" className="nav_links" to="about">About</NavLink>
        <NavLink id="nav_team" className="nav_links" to="team">Team</NavLink>
    </>
}
