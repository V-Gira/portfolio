import './App.css';
import Layout from './Layout';
import Home from './Home';
import Roots from './Roots';
import Growth from './Growth';
import Network from './Network';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/roots'>
              <Roots />
            </Route>
            <Route path='/growth'>
              <Growth />
            </Route>
            <Route path='/network'>
              <Network />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
