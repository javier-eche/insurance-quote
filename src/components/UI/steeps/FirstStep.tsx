
import urlCar from './../../../assets/images/icon_car.svg';
import { BiPlus, BiMinus } from 'react-icons/bi';
import { useContext, useState } from 'react';
import { UserContext } from '../../../assets/context/context';

function FirstStep(): JSX.Element {

  const {user, setStep, amount, setAmount, aditionalData, setAditionalData } = useContext(UserContext);
  const [year, setYear] = useState("");
  const [brand, setBrand] = useState("");
  const [gas, setGas] = useState(true);

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if(aditionalData.year.length !== 0 && aditionalData.brand.length !== 0 )
      setStep(2);
  }

  const handleClickDecrement = () => {
    amount <= 12500 ? setAmount(12500) : setAmount(amount - 100);
  }

  const handleClickIncrement = () => {
    amount >= 16500 ? setAmount(16500) : setAmount(amount + 100);
  }

  const onChangeYear = (e:any) => {
    setYear(e.target.value);
    setAditionalData({...aditionalData, year:e.target.value});
  }

  const onChangeBrand = (e:any) => {
    setBrand(e.target.value);
    setAditionalData({...aditionalData, brand:e.target.value});
  }

  const onValueChange = (e:any) => {
    setGas(!gas);
    setAditionalData({...aditionalData, isGas:e.target.value});
  }

  return (
    <>
      <div className="form-wellcome">
        <div>
          <div><h1 className="wellcome-name">¡Hola, {user.name.first}!</h1></div>
          <div><p className="wellcome-indication">Completa los datos de tu auto</p></div>
        </div>
      </div>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-data-container">
          <div className="form-data-inputs">
            <div className="form-data-input">
              <label>Año</label>
              <input type="text" placeholder="2019" value={year} onChange={(e) => onChangeYear(e)} />
            </div>
            <div className="form-data-input">
              <label>Marca</label>
              <input type="text" placeholder="Wolkswagen" value={brand} onChange={(e) => onChangeBrand(e)} />
            </div>
          </div>
          <div className="help-container">
            <p className="help-title">AYUDA</p>
            <hr />
            <div className="help-question">
              <p>¿No encuentras<br />el modelo ?</p>
              <img src={urlCar} alt="" />
            </div>
            <p className="help-link">CLIC AQUÍ</p>
          </div>
        </div>
        <div className="form-data-choose-container">
          <div className="form-data-choose">
            <p>¿Tu auto es a gas?</p>
            <div className="form-data-isgas">
              <input type="radio" checked={gas} value="si" name="yes" onChange={onValueChange}/>Si
              <input type="radio" checked={!gas} value="no" name="yes" onChange={onValueChange}/>No
            </div>
          </div>
          <div className="form-data-amount">
            <div className="amount-info">
              <p className="amount-info-title">Indica la suma asegurada</p>
              <p className="amount-info-limits">MIN $12,500 | MAX $16,500</p>
            </div>
            <div className="amount-controls">
              <BiMinus className="icon" onClick={handleClickDecrement} />
              <p>$ {amount}</p>
              <BiPlus className="icon" onClick={handleClickIncrement} />
            </div>
          </div>
          <button className="btn-submit">CONTINUAR</button>
        </div>
      </form>
    </>
  );
}

export default FirstStep;