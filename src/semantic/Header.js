/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../images/logo192.png';
import '../App.css';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <img src={Logo} alt="lemmon" width="30px" height="30px" />
      <nav>
        <ul className='container'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about-me'>About</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/reservations'>Reservations</Link></li>
          <li><Link to='/orders'>Order Online</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>


    </>
  )
}

export default Header;