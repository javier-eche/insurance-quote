import { useContext } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { UserContext } from '../../assets/context/context';
import FirstStep from './steeps/FirstStep';
import SecondStep from './steeps/SecondStep';

function FormData(): JSX.Element {
  const { step, setStep } = useContext(UserContext);

  const handleClickBack = (e:React.FormEvent) => {
    e.preventDefault();
    setStep(1);
  }

  return (
    <div className="container">
      <div className="form-data-back">
        <div className="form-data-back-steep" onClick={handleClickBack}><FiChevronLeft className="icon" /></div>
        <p>VOLVER</p>
      </div>
      {step === 1 ? <FirstStep /> : <SecondStep />}
    </div>
  );
}

export default FormData;