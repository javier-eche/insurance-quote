import { ImPhone } from 'react-icons/im';
import { Link } from 'react-router-dom';
import urlLogo from '../../assets/images/logo.svg';

function Header(): JSX.Element{

  return (
    <div className="header">
      <Link to="/">
        <img src={urlLogo} alt=""/>
      </Link>
      <div className="header-phone">
        <p className="header-phrase">¿Tienes alguna duda?</p>
        <ImPhone className="header-icon"/>
        <p className="header-number-phone">(01) 411 6001</p>
        <p className="header-callme">Llámanos</p>
      </div>
    </div>
  );
  
}
  
  export default Header;