import React from 'react';
import Nav from './nav';
import About from './about';
import Contact from './contact';
import Events from './events';
import Footer from './footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/events" exact component={Events} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <section className="home">
        <h1 className="main-home-h1">Introducing<br />the B.F.G. Band</h1>
      </section>
      <section className="home-two">
        <h1>The Southeast.<br /><br />Amplified.</h1>
      </section>
      <section className="home-three">
        <h1>Full band experiences,<br /><br />Lessons,<br /><br />and more.</h1>
        <Footer />
      </section>
    </div>
  );
}

export default App;
