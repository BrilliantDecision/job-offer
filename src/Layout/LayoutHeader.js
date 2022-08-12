import CustomLink from "../components/CustomLink";
import {Outlet} from "react-router-dom";

const LayoutHeader = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-row m-3 justify-center">
                <CustomLink to="/dropdown">Dropdown</CustomLink>
                <CustomLink to="/signUp">SignUp</CustomLink>
            </div>

            <Outlet/>

        </div>
    )
}

export default LayoutHeader;
