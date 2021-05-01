import { ImPhone } from 'react-icons/im';
import urlLogo from '../../assets/images/logo.svg';

function Header(): JSX.Element{

  return (
    <div>
      <img src={urlLogo} alt=""/>
      <div>
        <ImPhone />
        <p>Llámanos</p>
      </div>
    </div>
  );
  
}
  
  export default Header;