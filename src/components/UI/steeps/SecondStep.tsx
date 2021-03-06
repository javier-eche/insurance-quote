import urlImage from './../../../assets/images/rimaxman.png';
import urlVehicular from './../../../assets/images/vehicular.svg';
import { BiCheck } from 'react-icons/bi';
import { IoIosArrowUp } from 'react-icons/io';
import urlIconTheft from './../../../assets/images/icon_theft.svg';
import urlIconCrash from './../../../assets/images/crash.svg';
import urlIconTotal from './../../../assets/images/icon_perdidatotal.svg'
import { useHistory } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../../assets/context/context';
import { BiPlus, BiMinus } from 'react-icons/bi';

function SecondStep(): JSX.Element {

  let history = useHistory();

  const { amount, aditionalData } = useContext(UserContext);

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    history.push('/thanks');
  }

  return (
    <>
      <div className="coverage-wellcome">
        <div>
          <h1>Mira las coberturas</h1>
          <p>Conoce las coberturas para tu plan</p>
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="coverage-info">
          <div className="coverage-info-resume">
            <div className="info-resume">
              <p className="resume-placa">{aditionalData.placa}</p>
              <p className="resume-brand">{aditionalData.brand} {aditionalData.year}<br />Golf</p>
              <p className="resume-link">EDITAR</p>
            </div>
            <div className="coverage-info-image">
              <img src={urlImage} alt="" />
            </div>
          </div>
          <div className="coverage-info-pricing">
            <div className="pricing-amount">
              <div>
                <p className="pricing-amount-total">${amount}</p>
                <p className="pricing-amount-period">mensuales</p>
              </div>
              <img src={urlVehicular} alt="" />
            </div>
            <hr />
            <div className="pricing-plan">
              <p>El precio incluye:</p>
              <ul>
                <li><BiCheck className="icon-check" /> Llanta de repuesto</li>
                <li><BiCheck className="icon-check" /> Analisis de motor</li>
                <li><BiCheck className="icon-check" /> Aros gratis</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="coverage-type">
          <div style={{width:'384px'}}>
            <p className="subtitle">Agregar o quitar coberturas</p>
            <div className="coverage-option">
              <div className="coverage-tab"><p>PROTEGE A<br />TU AUTO</p></div>
              <div className="coverage-tab"><p>PROTEGE A LOS<br />QUE TE RODEAN</p></div>
              <div className="coverage-tab"><p>MEJORA TU<br />PLAN</p></div>
            </div>
            <div className="coverage-items">
              <div className="coverage-item">
                <div className="item-coverage">
                  <img src={urlIconTheft} alt="" />
                  <div className="item-coverage-description">
                    <p>Llanta robada</p>
                    <IoIosArrowUp className="switch-arrow" />
                    <div className="switch-container"><div className="switch"></div></div>
                  </div>
                </div>
                <div>
                  <div className="coverage-item-icon">
                    <BiMinus />
                  </div>
                  <p className="coverage-item-case">
                    He salido de casa a las cuatro menos cinco
                    para ir a la academia de ingles de mi pueblo
                    (Sant Cugat, al lado de Barcelona) con mi bici,
                    na llego a la academia que est?? en el centro del
                    pueblo en una plaza medio-grande y dejo donde
                    siempre la bici atada con una pit??n a un sitio
                    de esos de poner las bicis y mucho m??s</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="coverage-items">
              <div className="coverage-item">
                <div className="item-coverage">
                  <img src={urlIconCrash} alt="" />
                  <div className="item-coverage-description">
                    <p>Choque y/o pasarte la luz roja</p>
                    <IoIosArrowUp className="switch-arrow" />
                    <div className="switch-container"><div className="switch"></div></div>
                  </div>
                </div>
                <div>
                  <div className="coverage-item-icon">
                    <BiPlus />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="coverage-items">
              <div className="coverage-item">
                <div className="item-coverage">
                  <img src={urlIconTotal} alt="" />
                  <div className="item-coverage-description">
                    <p>Atropello en via de evitamiento</p>
                    <IoIosArrowUp className="switch-arrow" />
                    <div className="switch-container"><div className="switch"></div></div>
                  </div>
                </div>
                <div>
                  <div className="coverage-item-icon">
                    <BiPlus />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="coverage-actions">
            <div className="coverage-actions-resume">
              <p className="actions-resume-price">${amount}</p>
              <p className="actions-resume-period">MENSUAL</p>
            </div>
            <button className="btn-get-coverage">LO QUIERO</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SecondStep;