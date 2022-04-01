import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate, useNavigate, Outlet } from "react-router-dom";

import Home from "./Components/Landing/pages/Home";
import DashboardContents from "./Components/Dashboard/Dashboard";
import SignUp from "./Components/Landing/pages/Signup";
import Login from "./Components/Landing/pages/Login";
import AuthDataProvider from "./Components/Landing/userAuth";
import { useAuthDataContext } from "./Components/Landing/userAuth";

const PrivateRoute = () => {
    const authData = useAuthDataContext();
    console.log("private route: " + authData + "|" + authData.user + "|" + authData.user == true);

    return authData.user ? <Outlet /> : <Navigate to="/signup" />;
};

function App() {
    return (
        <BrowserRouter>
            <AuthDataProvider>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route exact path="/dashboard" element={<PrivateRoute />}>
                        <Route exact path="/dashboard/*" element={<DashboardContents />} />
                    </Route>
                    <Route path="*" element={<h1>Error 404. Page not found!</h1>} />
                </Routes>
            </AuthDataProvider>
        </BrowserRouter>
    );
}

export default App;
