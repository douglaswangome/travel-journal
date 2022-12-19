import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faEarth} />
      <span>My Travel Journal</span>
    </div>
  );
}

export default Header;