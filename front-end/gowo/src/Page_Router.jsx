import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";

export default function Router() {
    return (
        <BrowserRouter>
            <nav>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
                    Start
                </NavLink>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/MyPage'>
                    My_Page
                </NavLink>
            </nav>
            <Routes>
                <Route exact path='/' element={<Main />} />
                <Route path="/MyPage" element={<MyPage/>} />
            </Routes>
        </BrowserRouter>
    );
}