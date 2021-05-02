import { FiChevronLeft } from 'react-icons/fi';
import urlCar from './../../assets/images/icon_car.svg';
import { BiPlus, BiMinus } from 'react-icons/bi';

function FormData(): JSX.Element {
  return (
    <div className="container">
      <div className="form-data-back">
        <div className="form-data-back-steep"><FiChevronLeft className="icon" /></div>
        <p>VOLVER</p>
      </div>
      <div>
        <h1>¡Hola, Juan!</h1>
      </div>
      <div>
        <p>Completa los datos de tu auto</p>
      </div>
      <form>
        <div className="form-data-container">
          <div className="form-data-inputs">
            <div className="form-data-input">
              <label>Año</label>
              <input type="text" placeholder="2019" />
            </div>
            <div className="form-data-input">
              <label>Marca</label>
              <input type="text" placeholder="Wolkswagen" />
            </div>
          </div>
          <div className="help-container">
            <p className="help-title">AYUDA</p>
            <hr/>
            <div className="help-question">
              <p>¿No encuentras<br />el modelo ?</p>
              <img src={urlCar} alt=""/>
            </div>
            <p className="help-link">CLIC AQUÍ</p>
          </div>
        </div>
        <div className="form-data-choose">
          <p>¿Tu auto es a gas?</p>
          <div className="form-data-isgas">
            <input type="radio" value="si" name="yes" />Si
            <input type="radio" value="no" name="no" />No
          </div>
        </div>
        <div className="form-data-amount">
          <div className="amount-info">
            <p className="amount-info-title">Indica la suma asegurada</p>
            <p className="amount-info-limits">MIN $12,500 | MAX $16,500</p>
          </div>
          <div className="amount-controls">
            <BiMinus className="icon"/>
            <p>$ 14,300</p>
            <BiPlus className="icon" />
          </div>
        </div>
        <button className="btn-submit">CONTINUAR</button>
      </form>
    </div>
  );
}

export default FormData;