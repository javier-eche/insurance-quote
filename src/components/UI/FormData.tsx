import { FiChevronLeft } from 'react-icons/fi';
// import FirstStep from './steeps/FirstStep';
import SecondStep from './steeps/SecondStep';

function FormData(): JSX.Element {
  return (
    <div className="container">
      <div className="form-data-back">
        <div className="form-data-back-steep"><FiChevronLeft className="icon" /></div>
        <p>VOLVER</p>
      </div>
      {/* <FirstStep /> */}
      <SecondStep />
    </div>
  );
}

export default FormData;