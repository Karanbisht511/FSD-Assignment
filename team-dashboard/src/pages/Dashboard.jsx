import { Navigate, useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import AuthContext from "../context/AuthContext"
import UserDetailsContext from "../context/UserDetailsContext.js"

export default function Dashboard() {

    const { userDetails, getDatesInfo } = useContext(UserDetailsContext)
    const { auth, logout } = useContext(AuthContext)

    const { isAuthenticated } = auth

    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/")
    }

    const { name, last_login, balance, transaction } = userDetails

    // console.log(userDetails);

    let ll = getDatesInfo(last_login)


    if (!isAuthenticated) {
        <Navigate to="/" replace={true} />
    } else {
        return <>
            <div>Welcome {name}</div>
            {last_login && <div>lastlogin:{ll.dd} {ll.mm} {ll.yyyy}</div>}
            <div>Account Balance: {balance}</div>
            <table>
                <tr>
                    <td>Date</td>
                    <td>Description</td>
                    <td>Amount</td>
                </tr>
                <tbody>
                    {transaction && transaction.map(element => {
                        const { date, amount, desc } = element
                        const dateInfo = getDatesInfo(date)
                        const { dd, mm, yyyy } = dateInfo
                        // console.log(dateInfo);

                        return <tr>
                            <td>{dd}-{mm}-{yyyy}</td>
                            <td>{desc}</td>
                            <td>{amount}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <div>
                <h3>Subscribe to alert</h3>
                <input type="checkbox" name="" id="sms" />
                <label htmlFor="sms">SMS Alert</label>
                <input type="checkbox" name="" id="marketing" />
                <label htmlFor="marketing">Marketing Newsletter</label>
                <input type="checkbox" name="" id="flyers" />
                <label htmlFor="flyers">Flyers</label>
                <input type="submit" value="Submit" />
            </div>
            <div>
                <label htmlFor="dataBinding">Two way data binding</label>
                <input className="dataBinding" type="text" placeholder="Enter value for two way biding" />
            </div>
            <button onClick={handleLogout}>logout</button>
        </>
    }
}
