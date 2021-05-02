import Home from './components/pages/Home';
import './assets/styles/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InputData from './components/pages/InputData';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/enter-data" component={InputData} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;