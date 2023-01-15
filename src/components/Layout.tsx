import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

const Layout=()=>{
    return(
        <>
        <Header/>
        <div className="containter">
            <Outlet/>
        </div>
        </>
    );
};
export default Layout;