import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link,NavLink } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout