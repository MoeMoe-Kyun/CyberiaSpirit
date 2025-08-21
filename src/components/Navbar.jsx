import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='navigation-menu'>
        <ol className='navbar-nav'>
            <li className='nav-item'><Link to={"/"}>Home</Link></li>
            <li className='nav-item'><Link to={"/journals"}>Journals</Link></li>
            <li className='nav-item'><Link to={"/albums"}>Albums</Link></li>
            <li className='nav-item'><Link to={"/webrings"}>Webrings</Link></li>
            <li className='nav-item-bottom'><img className="logo" src="src/assets/lainsmug.png"></img></li>
        </ol>
    </div>
  )
}

export default Navbar