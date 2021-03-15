import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Content from './components/Content/Content';
import Series from './components/Series/Series';
import Videos from './components/Videos/Videos';
import Player from './components/Player/Player';
import About from './components/About/About';
import Page404 from './components/404/Page404';
import CreateVideo from './components/CreateVideo/CreateVideo';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/createVideo">
            <CreateVideo/>
          </Route>
          <Route exact path="/videos">
            <Content>
              <Series/>
            </Content>
          </Route>
          <Route exact path="/videos/:series">
            <Content>
              <Player/>
              <Videos/>
            </Content>
          </Route>
          <Route path="*">
            <Page404/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
