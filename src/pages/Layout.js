import { Outlet } from 'react-router-dom';
import App from '../App';
import React from 'react';

const Layout = () => {
     return (<>
     <App />
     <Outlet />
     </>
     )
}

export default Layout;