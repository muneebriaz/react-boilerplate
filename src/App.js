import React from 'react';

import HomeComponent from './views/Home'
import AboutComponent from './views/About'
import ContactComponent from './views/Contact'
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './views/Products'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header />

        <div>
          <Switch>

            <Route exact path="/">

              <HomeComponent name="Muneeb" />

            </Route>


            <Route path="/product/:id">

              <Products />

            </Route>

            <Route path="/about">

              <AboutComponent />

            </Route>

            <Route path="/contact">

              <ContactComponent />

            </Route>

          </Switch>
        </div>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
