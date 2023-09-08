import { Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"
import { useContext } from "react"
import bg from "../images/bg.jpg"
import Member from "./Member.jsx"

export default function Team() {
    const { auth } = useContext(AuthContext)
    const { isAuthenticated } = auth

    const nameList = ['Beng Tiong Tang', 'Niraj Kumar Jha', 'Siddhart Pandey', 'Jatin Suri', 'Parasmani Jain', 'Saurabh Nilegaonkar', 'Bhawana Sharma']

    if (!isAuthenticated) {
        <Navigate to="/" replace={true} />
    } else {
        return <div id="team">
            <div className="heading">
                <h1>Meet the Team</h1>
            </div>
            <div className="teamlist_container">
                <div className="team_list">
                    {nameList.map(element => <Member image={bg} name={element} />)}
                </div>
                <div className="envelope_container">
                    <div className="envelope"></div>
                </div>
            </div>
        </div>
    }
}