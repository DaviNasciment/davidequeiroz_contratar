import './header.css';
import { FaArrowLeft } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header">
            <div className="header-icon">
                <FaArrowLeft />
            </div>
            <div className="header-title">
                Contratar
            </div>
        </div>
    );
};

export default Header;