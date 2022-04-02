import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Landing/pages/Home";
import DashboardContents from "./Components/Dashboard/Dashboard";
import SignUp from "./Components/Landing/pages/Signup";
import Login from "./Components/Landing/pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<Login />} />
                {/* <Route path="dashboard" element={<DashboardContents />} /> */}
                <Route path="*" element={<h1>Error 404. Page not found!</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
