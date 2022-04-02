import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Home from "./Components/Landing/pages/Home";
import DashboardContents from "./Components/Dashboard/Dashboard";
import SignUp from "./Components/Landing/pages/Signup";
import Login from "./Components/Landing/pages/Login";
import AuthDataProvider from "./Components/Landing/userAuth";
import { ProtectedRoute } from "./Components/Dashboard/ProtectedRoutes";
import { CreateInvoice } from "./Components/Dashboard/pages/CreateInvoice";
import { Activity } from "./Components/Dashboard/pages/Activity";
import { MyInvoices } from "./Components/Dashboard/pages/MyInvoices";

function App() {
    return (
        <BrowserRouter>
            <AuthDataProvider>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/dashboard" element={<DashboardContents />}>
                            <Route path="/dashboard/" element={<Activity />} />
                            <Route path="/dashboard/create" element={<CreateInvoice />} />
                            <Route path="/dashboard/invoices" element={<MyInvoices />} />
                        </Route>
                    </Route>
                    <Route path="*" element={<h1>Error 404. Page not found!</h1>} />
                </Routes>
            </AuthDataProvider>
        </BrowserRouter>
    );
}

export default App;
