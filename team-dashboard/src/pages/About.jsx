import { Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"
import { useContext } from "react"

export default function About() {
    const { auth, logout } = useContext(AuthContext)
    const { isAuthenticated } = auth

    if (!isAuthenticated) {
        <Navigate to="/" replace={true} />
    }
    else {
        return <>
            <h1>About iJavascript</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus pariatur ullam officiis, fuga adipisci possimus ratione. Corporis aliquid numquam reiciendis, suscipit totam dolore. Dolor cum inventore natus velit facere sit.</p>
            <div>
                <h3>Reusuable Component</h3>
                <div>1</div>
                <div>2</div>
            </div>
        </>
    }
}