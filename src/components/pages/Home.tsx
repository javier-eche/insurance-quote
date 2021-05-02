
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../assets/context/context";
import Header from "../UI/Header";
import Hero from "../UI/Hero";
import Axios from 'axios';
import { useHistory } from "react-router";
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

function Home(): JSX.Element{

  const [showList, setShowList] = useState(false);
  const {setUser} = useContext(UserContext);
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await Axios('https://randomuser.me/api/')
      setUser(data.results[0])
    }
    fetchData();
  },[setUser]);

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    history.push('/enter-data')
  }

  const handleClickToggleList = () => {
    setShowList(!showList);
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
                <RiArrowDownSLine onClick={handleClickToggleList}/>
                {showList
                ?(<div className="list">
                    <p>DNI</p>
                    <p>CARNET</p>
                    <p>PASSPORT</p>
                  </div>
                ):('')
                }
              </div>
              <input className="home-form-input" type="text" placeholder="Nro de doc"/>
            </div>
            <input className="home-form-input" type="text" placeholder="Celular" />
            <input className="home-form-input" type="text" placeholder="Placa" />
            <div className="home-form-checkbox">
              <input type="checkbox" name="accept" id="accept" />
              <label htmlFor="accept">
                Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.
              </label>              
            </div>
            <button className="home-form-btn-submit">COTIZALO</button>
          </form>
        </div>
      </div>
    </div>
  );
  
}

export default Home;