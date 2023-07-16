/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../images/logo192.png';
import '../App.css';
import './Header.css';
const Header = () => {
  return (
    <>
      <img src={Logo} alt="lemmon" width="30px" height="30px" />
      <nav>
        <ul className='container'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header;