import {Link} from "react-router-dom";

const CustomLink = ({to, children}) => {
    return (
        <Link to={to} className="m-2 p-3 border w-32 text-center transition-colors duration-200 hover:border-blue-500">{children}</Link>
    )
}

export default CustomLink;
