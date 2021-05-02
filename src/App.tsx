import Home from './components/pages/Home';
import './assets/styles/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from './assets/context/context';
import InputData from './components/pages/InputData';
import { useState } from 'react';
import Thanks from './components/pages/Thanks';

function App(): JSX.Element {
  const [user, setUser] = useState([]);
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(12500)

  return (
    <>
      <Router>
        <Switch>
          <UserContext.Provider value={{ user, setUser, step, setStep, amount, setAmount }} >
            <Route exact path="/thanks" component={Thanks} />
            <Route exact path="/enter-data" component={InputData} />
            <Route exact path="/" component={Home} />
          </UserContext.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;