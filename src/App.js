import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
