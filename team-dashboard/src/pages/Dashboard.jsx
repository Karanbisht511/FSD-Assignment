import { Navigate } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import UserDetailsContext from "../context/UserDetailsContext.js"
import bg from "../images/bg.jpg"

export default function Dashboard() {

    const { userDetails, getDatesInfo } = useContext(UserDetailsContext)
    const { auth } = useContext(AuthContext)

    const { isAuthenticated } = auth

    const { name, last_login, balance, transaction } = userDetails
    let ll = getDatesInfo(last_login)

    if (!isAuthenticated) {
        <Navigate to="/" replace={true} />
    } else {
        return <div id="dashboard">
            <div className="dashboard_intro border_bottom">
                <div>
                    <img style={{ width: "100px", height: "100px", border: "3px solid black" }} src={bg} alt="" />
                </div>
                <div>
                    <h2>Welcome {name}!</h2>
                    {last_login && <div> <i>Lastlogin: {ll.dd} {ll.mm} {ll.yyyy}</i></div>}
                </div>
            </div>
            <h3 className="balance">Account Balance: {balance}</h3>

            <div className="expenditure_table border_bottom">
                <table>
                    <tr>
                        <th className="date">Date</th>
                        <th className="desc">Description</th>
                        <th className="amount">Amount</th>
                    </tr>
                    <tbody>
                        {transaction && transaction.map(element => {
                            const { date, amount, desc } = element
                            const dateInfo = getDatesInfo(date)
                            const { dd, mm, yyyy } = dateInfo

                            return <tr>
                                <td>{dd}-{mm}-{yyyy}</td>
                                <td>{desc}</td>
                                <td>{amount}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div className="flex_container">
                <div className="subscription_container">
                    <h3 className="subscribe">Subscribe to Alerts</h3>
                    <div>
                        <input type="checkbox" name="" id="sms" />
                        <label htmlFor="sms">SMS Alert</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="marketing" />
                        <label htmlFor="marketing">Marketing Newsletter</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="flyers" />
                        <label htmlFor="flyers">Flyers</label>
                    </div>
                    <div>
                        <input className="submit_btn" type="submit" value="Submit" />
                    </div>
                </div>
                <div className="two_way_binding">
                    <div>
                        <h2><label htmlFor="dataBinding">Two way data binding</label></h2>
                    </div>
                    <div>
                        <input className="dataBinding" type="text" placeholder="Enter value for two way biding" />
                    </div>
                </div>
            </div>

            {/* <button onClick={handleLogout}>logout</button> */}
        </div>

    }
}
