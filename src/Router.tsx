import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./login/Index";

export const AppRouter:React.FC<{}> = () =>{
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    );
}