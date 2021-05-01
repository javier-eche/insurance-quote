import urlImageAvatar from './../../assets/images/avatarlarge.png';

function Hero(): JSX.Element{

  return (
    <div className="hero-background">
      <div className="hero-avatar">
        <img src={urlImageAvatar} alt= ""/>
      </div>
      <div className="hero-info">
        <div className="hero-title">
          <p className="hero-heading1">¡NUEVO!</p>
          <h1 className="hero-heading2">Seguro Vehicular Tracking</h1>
          <p className="hero-description">Cuentanos donde le haras seguimiento a tu seguro</p>
        </div>
        <div className="hero-copyrigth">
          <p>© 2020 RIMAC Seguros y Reaseguros.</p>
        </div>         
      </div>     
    </div>
  );
  
}

export default Hero;