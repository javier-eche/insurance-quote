import { ImPhone } from 'react-icons/im';
import urlLogo from '../../assets/images/logo.svg';

function Header(): JSX.Element{

  return (
    <div className="header">
      <img src={urlLogo} alt=""/>
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