import "./App.css";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Team from "./pages/Team.jsx";
import About from "./pages/About.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserDetailsState from "./context/UserDetailsState.js";
import AuthState from "./context/AuthState.js";

function App() {
  return (
    <div className="App">
      <AuthState>
        <UserDetailsState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="home" element={<Home />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="team" element={<Team />} />
                <Route path="About" element={<About />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserDetailsState>
      </AuthState>
    </div>
  );
}

export default App;
