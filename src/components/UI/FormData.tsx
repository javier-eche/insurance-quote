import { FiChevronLeft } from 'react-icons/fi';
import FirstSteep from './steeps/FirstSteep';

function FormData(): JSX.Element {
  return (
    <div className="container">
      <div className="form-data-back">
        <div className="form-data-back-steep"><FiChevronLeft className="icon" /></div>
        <p>VOLVER</p>
      </div>
      <FirstSteep />
    </div>
  );
}

export default FormData;