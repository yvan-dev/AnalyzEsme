import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Start from './Pages/Start';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App () {
  // const history = createHistory();
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={ Start } />
        <Route path='/home' component={ Home } />
      </Switch>
    </Router>
  );
}

export default App;
