import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink className="mr-7" to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
};

export default Header;