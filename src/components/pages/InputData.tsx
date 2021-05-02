import FormData from "../UI/FormData";
import Header from "../UI/Header";
import Steeps from "../UI/Steeps";

function InputData (): JSX.Element {

  return (
    <>
      <Header />
      <div className="section-inputData">
        <Steeps />
        <FormData />
      </div>
    </>
  );
}

export default InputData;