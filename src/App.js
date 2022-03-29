import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/LandingPage/Home";
import DashboardContents from "./Components/Dashboard/Dashboard";
import SignUp from "./Components/LandingPage/Signup";
import Login from "./Components/LandingPage/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="signup" element={<SignUp />} />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<h1>Error 404. Page not found!</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
