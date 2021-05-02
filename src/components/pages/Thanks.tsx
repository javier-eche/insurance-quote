import { useContext } from "react";
import { UserContext } from "../../assets/context/context";
import Header from "../UI/Header";
import urlAvatarThanks from './../../assets/images/avatarthanks.png';
import urlAvatarThanksMini from './../../assets/images/thansmini.png';

function Thanks(): JSX.Element{

  const { user } = useContext(UserContext);
  return (
    <>
      <Header />
      <div className="thanks-container">
        <div className="thanks-hero">
          <img className="thanks-hero-imglarge" src={urlAvatarThanks} alt=""/>
          <img className="thanks-hero-imgsmall" src={urlAvatarThanksMini} alt=""/>
        </div>
        <div className="thanks-message">
          <div className="thanks-message-content">
            <h1 className="message-content-title">
              ¡Te damos la bienvenida! Cuenta con nosotros para proteger tu vehículo
            </h1>
            <p className="message-content-description">
              Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
            </p>
            <p className="message-content-email">{user.email}</p>
            <button className="btn-thanks">CÓMO USAR MI SEGURO</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Thanks;