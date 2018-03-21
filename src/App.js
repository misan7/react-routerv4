import React from "react";
import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";

// The App component references two other components: Navigation which will display the navigation menu,
// and Main which will display the contents of each view.

const App = () => (
  <div className="app">
    <h1>React Router Demo</h1>
    <Navigation />
    {<Main />}{" "}
  </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact activeClassName="current" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

// The exact prop helps to specify that we want to match the exact path that is provided in the path prop.
// By adding this prop, we make sure each Route is rendered only if an exact match is made.

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

const Home = () => (
  <div className="home">
    <h1>Welcome to my home</h1>
    <p>
      The SSL driver is down, hack the open-source circuit so we can generate
      the RAM program!
    </p>
    <img src="https://s3.amazonaws.com/uifaces/faces/twitter/darylws/128.jpg" />
  </div>
);

const About = () => (
  <div className="about">
    <h1>About Me</h1>
    <p>
      I'll navigate the online HTTP feed, that should matrix the SMTP bandwidth!
    </p>
    <p>
      Use the auxiliary AI driver, then you can program the back-end monitor!
    </p>
  </div>
);

const Contact = () => (
  <div className="contact">
    <h1>Contact Me</h1>
    <p>
      You can reach me via email: <strong>Jordi18@yahoo.com</strong>
    </p>
  </div>
);

export default App;
