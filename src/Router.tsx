import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./login/Index";
import {ScapeButton} from "./Functions/ScapeButton";
import {StartPage} from "./StartPage/StartPage";

export const AppRouter:React.FC<{}> = () =>{
    return (
        <Routes>
            <Route path="/" element={<StartPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/scaper" element={<ScapeButton/>}/>
        </Routes>
    );
}