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
                <div><img style={{ width: "150px", height: "150px", border: "3px solid black" }} src={bg} alt="" /></div>
                <div className="description"> <p >iJavascript is a research group, founded to check different javascript frameworks based on different design patters.</p>
                    <p>During Kick-off it will test React,Angular,Knockout and Ember JS features. This use case will prove different aspects of frameworks capacities.</p>
                </div>
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