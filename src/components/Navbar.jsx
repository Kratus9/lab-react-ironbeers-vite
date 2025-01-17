import { Link } from 'react-router-dom'
import homeIcon from '../assets/home-icon.png';

function Navbar() {
    return (
        <nav className='navbar-link'>
            <Link to="/"><img src={ homeIcon } alt="Home" /></Link>
        </nav>
    )
}

export default Navbar;
