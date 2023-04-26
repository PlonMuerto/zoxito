import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutComponent from "@containers/Layout";

import HomePage from "@pages/HomePage";
import DontPage from '@pages/404Page';
import LoginPage from '@pages/LoginPage';

import AppContext from '../context/AppContext';

import useInitialState from '../hook/useInitialState';

import "@styles/globals.css"

export default function App(){
    const initialState = useInitialState()
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>    
                <LayoutComponent>
                    <Routes>
                        <Route exact path="/" Component={HomePage}></Route>
                        <Route exact path="/login" Component={LoginPage}></Route>
                        <Route path="*" Component={DontPage}></Route>
                    </Routes>
                </LayoutComponent>
            </BrowserRouter>
        </AppContext.Provider>
    )
};