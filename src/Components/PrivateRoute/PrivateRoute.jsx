
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoutes=()=>{
    const token=localStorage.getItem("token");
    return (
      token !==null && token !==undefined ? <Outlet/>:<Navigate to={'/login'}/>
    )
}