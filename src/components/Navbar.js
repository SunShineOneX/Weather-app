import React from 'react'
import Friday from './Friday';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
        }
        
    }
    
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg" style="background-color: #ffa931">
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
          <a class="dropdown-item" href="#">Monday</a>
          <a class="dropdown-item" href="#">Tuesday</a>
          <a class="dropdown-item" href="#">Wednesday</a>
          <a class="dropdown-item" href="#">Thursday</a>
          <a class="dropdown-item" href="#">Friday</a>
          <a class="dropdown-item" href="#">Saturday</a>
          <a class="dropdown-item" href="#">Sunday</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
            </div>
        )
    }
}

export default Navbar;