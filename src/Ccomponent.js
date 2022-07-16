import React, { Component } from "react";
import './stylesNew.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import About from "./About";
import Users from "./Users";
import Home from "./Home";

export default class Ccomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/users'}>Users</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path={'/About'} element={<About/>} />
            <Route path={'/Users'} element={<Users/>} />
            <Route path={'/'} element={ <Home/>} />
          </Routes>
        </div>
      </Router>
    )
  }

}