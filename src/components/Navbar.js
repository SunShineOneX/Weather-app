import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from  "react-router-dom";
import Forecast from './Forecast';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';
import Saturday from './Saturday';
import Sunday from './Sunday';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
        }
        
    }
    
    render() {
        return (
            <Router>
            <div>
                <nav class="navbar navbar-light navbar-expand-lg" id="nav">
  <a class="navbar-brand" href="#">Forecast</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#"><Link to="/Monday">Monday</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Tuesday">Tuesay</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Wednesday">Wednesday</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Thursday">Thursday</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Monday">Monday</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Monday">Monday</Link></a>
          <a class="dropdown-item" href="#"><Link to="/Monday">Monday</Link></a>
        </div>
      </li>
    </ul>
  </div>
</nav>
<Switch>
    <Route exact path="/" component={Forecast} />
    <Route path="/Monday" component={Monday} />
    <Route path="/Tuesday" component={Tuesday} />
    <Route path="/Wednesday" component={Wednesday} />
    <Route path="/Thursday" component={Thursday} />
    <Route path="/Friday" component={Friday} />
    <Route path="/Saturday" component={Saturday} />
    <Route path="/Sunday" component={Sunday} />
</Switch>
            </div>
            </Router>
        )
    }
}

export default Navbar;