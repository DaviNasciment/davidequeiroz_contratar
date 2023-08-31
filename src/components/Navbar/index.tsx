import './navbar.css'
import { FaHome, FaCalendar, FaHeart, FaUser } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="content-navbar-item">
                <div className="navbar-item">
                    <FaHome />
                    <span>Home</span>
                </div>
                <div className="navbar-item">
                    <FaCalendar />
                    <span>Plantões</span>
                </div>
                <div className="navbar-item">
                    <FaHeart />
                    <span>Favoritos</span>
                </div>
                <div className="navbar-item">
                    <FaUser />
                    <span>Minha conta</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;