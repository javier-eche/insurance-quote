import { useContext } from "react";
import { UserContext } from "../../assets/context/context";

function Steeps(): JSX.Element{

  const { step } = useContext(UserContext);
  return(
    <div className="steep-container">
      <div className="steep-items">
        <div className="steep-item">
          <div className={step === 1 ? "steep-circle-active" : "steep-circle-inactive"}>1</div>
          <p className="steep-number-one">Datos del auto</p>
        </div>
        <div className="steep-item">
          <div className={step === 2 ? "steep-circle-active" : "steep-circle-inactive"}>2</div>
          <p className="steep-number-two">Arma tu plan</p>
        </div>
      </div>
      <div className="step-responsive">
        <p>Paso 2 de 2</p>
        <div className="step-progress"></div>
      </div>
    </div>
  );
}

export default Steeps;