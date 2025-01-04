import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return(
        <div className="navBar">
            <nav>
                <ul className="navlist">
                    <li className="navLink"><Link className="link" to="/">Home</Link></li>
                    <li className="navLink"><Link to="/about">About</Link></li>
                    <li className="navLink"><Link to="/colourPicker">Colour Picker</Link></li>
                    <li className="navLink"><Link to="/toDo">To do</Link></li>
                    <li className="navLink"><Link to="/books">Books</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;