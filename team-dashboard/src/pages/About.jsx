import { Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"
import { useContext } from "react"
import bg from "../images/bg.jpg"
import ReusableComp from "./ReusableComp"

export default function About() {
    const { auth, logout } = useContext(AuthContext)
    const { isAuthenticated } = auth

    if (!isAuthenticated) {
        <Navigate to="/" replace={true} />
    }
    else {
        return <div id="about">
            <div className="heading">
                <h1>About iJavascript</h1>
            </div>
            <div className="flex_container1">
                <div><img style={{ width: "100px", height: "100px", border: "3px solid black" }} src={bg} alt="" /></div>
                <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus pariatur ullam officiis, fuga adipisci possimus ratione. Corporis aliquid numquam reiciendis, suscipit totam dolore. Dolor cum inventore natus velit facere sit.</p>
            </div>
            <div className="reuse_component">
                <h3>Re-usable Component</h3>
                <div className="flex_container2">
                  <ReusableComp></ReusableComp>
                  <ReusableComp></ReusableComp>
                </div>
            </div>
        </div>
    }
}