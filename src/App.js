import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Content from './components/Content/Content';
import Series from './components/Series/Series';
import Videos from './components/Videos/Videos';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/videos">
            <Content>
              <Series/>
            </Content>
          </Route>
          <Route exact path="/videos/:series">
            <Content>
              <Videos/>
            </Content>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
