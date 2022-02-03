import React from "react";
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <header>
            <Link to='/' style={{padding: 10}}>Coins</Link>
            <Link to='/chosen'>Chosen coin</Link>
        </header>
        <Outlet />
        </>
    )
}

export default Layout;