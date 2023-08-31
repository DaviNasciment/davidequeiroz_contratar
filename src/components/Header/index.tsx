import './header.css';
import { FaArrowLeft } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header">
            <a href="#" className="header-icon">
                <FaArrowLeft />
            </a>
            <div className="header-title">
                Contratar
            </div>
        </div>
    );
};

export default Header;