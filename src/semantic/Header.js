import Logo from '../images/logo192.png';
import '../App.css';
const Header = () => {
  return (
    <>
      <img src={Logo} alt="lemmon" width="30px" height="30px" />
      <nav>
        <ul>
          <a href='/#'>Home</a>
          <a href='/#about'>About </a>
          <a href='/#contact'>Contact</a>
        </ul>
      </nav>
    </>
  )
}

export default Header;
