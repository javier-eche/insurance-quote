
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../assets/context/context";
import Header from "../UI/Header";
import Hero from "../UI/Hero";
import Axios from 'axios';
import { useHistory } from "react-router";
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

function Home(): JSX.Element{

  const [showList, setShowList] = useState(false);
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");
  const [placa, setPlaca] = useState("");
  const [active, setActive] = useState(false);
  const {setUser} = useContext(UserContext);
  let history = useHistory();
  const { aditionalData, setAditionalData} = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await Axios('https://randomuser.me/api/')
      setUser(data.results[0])
    }
    fetchData();
  },[setUser]);

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if(aditionalData.dni.length !== 0 && aditionalData.phone.length !== 0 && aditionalData.placa.length !== 0)
      history.push('/enter-data')
  }

  const handleClickToggleList = () => {
    setShowList(!showList);
  }

  const onChangeDni = (e:any) => {
    setDni(e.target.value);
    if(e.target.value.length === 8 )
      setAditionalData({...aditionalData, dni:e.target.value});
  }

  const onChangePhone = (e:any) => {
    setPhone(e.target.value);
    if(e.target.value.length >= 9 )
      setAditionalData({...aditionalData, phone:e.target.value});
  }

  const onChangePlaca = (e:any) => {
    setPlaca(e.target.value);
    setAditionalData({...aditionalData, placa:e.target.value.toUpperCase()});
  }

  const onChangeCheck = (e:any) => {
    console.log(e.target.checked);
    setActive(e.target.checked);
    setAditionalData({...aditionalData, accept:e.target.checked});   
  }

  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <div className="home-content-hero">
          <Hero />
        </div>
        <div className="home-content-form">
          <div className="home-content-form-title">
            <h1>Déjanos tus datos</h1>
          </div>
          <form className="home-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="home-form-select">
              <div className="home-form-select-list">
                <p>DNI</p>
                {showList ? <RiArrowUpSLine className="icons" onClick={handleClickToggleList}/> : <RiArrowDownSLine className="icons" onClick={handleClickToggleList}/>}
                {showList
                ?(<div className="list">
                    <div className="list-item"><p onClick={() => setShowList(!showList)}>DNI</p></div>
                    <div className="list-item"><p onClick={() => setShowList(!showList)}>CARNET</p></div>
                    <div className="list-item"><p onClick={() => setShowList(!showList)}>PASSPORT</p></div>
                  </div>
                ):('')
                }
              </div>
              <input className="home-form-input" type="number" placeholder="Nro de doc" value={dni} onChange={(e) => onChangeDni(e)}/>
            </div>
            <input className="home-form-input" type="number" pattern="[0-9]{0,8}" placeholder="Celular" value={phone} onChange={(e) => onChangePhone(e)} />
            <input className="home-form-input" type="text" placeholder="Placa" value={placa} onChange={(e) => onChangePlaca(e)} />
            <div className="home-form-checkbox">
              <input type="checkbox" name="accept" id="accept" checked={aditionalData.accept} onChange={(e) => onChangeCheck(e)}/>
              <label htmlFor="accept">
                Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.
              </label>              
            </div>
            <button disabled={!active} className={aditionalData.accept ? "home-form-btn-submit-active" : "home-form-btn-submit-inactive"}>COTIZALO</button>
          </form>
        </div>
      </div>
    </div>
  );
  
}

export default Home;