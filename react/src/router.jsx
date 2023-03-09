import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Login from "./login";
import Dashboard from "./admin/pages/Dashboard";
const router = createBrowserRouter([
{
    path:'/login',
    element:<Login/>
},{
    path:'*',
    element:<Dashboard/>
}
])
export default router;