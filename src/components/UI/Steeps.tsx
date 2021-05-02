function Steeps(): JSX.Element{
  return(
    <div className="steep-container">
      <div className="steep-items">
        <div className="steep-item">
          <div className="steep-circle-active">1</div>
          <p className="steep-number-one">Datos del auto</p>
        </div>
        <div className="steep-item">
          <div className="steep-circle-inactive">2</div>
          <p className="steep-number-two">Arma tu plan</p>
        </div>
      </div>
    </div>
  );
}

export default Steeps;