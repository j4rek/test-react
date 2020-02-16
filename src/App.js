import './App.scss';
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Home from './views/home';
import List from './views/list';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main style={{ padding: '10px' }}>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/list/:type' component={List} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
