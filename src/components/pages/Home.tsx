
import { useContext, useEffect } from "react";
import { UserContext } from "../../assets/context/context";
import Header from "../UI/Header";
import Hero from "../UI/Hero";
import Axios from 'axios';
import { useHistory } from "react-router";

function Home(): JSX.Element{

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
            <input className="home-form-input" type="text" placeholder="Nro de doc"/>
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