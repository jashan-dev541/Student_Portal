import {Link} from "react-router-dom";
import './Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/profile/edit">Edit</Link>
            <Link to="/settings">Settings</Link>
        </nav>
    );
}
export default Navbar;