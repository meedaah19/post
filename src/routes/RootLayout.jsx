import { Outlet } from "react-router-dom";
import MainHeader from "../component/MainHeader";

export default function RootLayout(){
    return(
        <>
        <MainHeader/>
        <Outlet/>
        </>
    )
}