import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutComponent from "@containers/Layout";

import HomePage from "@pages/Home";
import DontPage from '@pages/404';
 
import "@styles/globals.css"
 

export default function App(){
    return (
        <BrowserRouter>    
            <LayoutComponent>
                <Routes>
                    <Route exact path="/" Component={HomePage}></Route>
                    <Route path="*" Component={DontPage}></Route>
                </Routes>
            </LayoutComponent>
        </BrowserRouter>
    )
};