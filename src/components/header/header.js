import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  state = {  }
  render() {
    return (
      <nav className='level has-text-white'>
        <div className='level-left'>
          <p className="level-item">Boards</p>
        </div>
        <p className="level-item has-text-centered">Trello Clone</p>
        <div className='level-right'>
            <p className="level-item"> Username </p>
            <p className="level-item"> Sign out </p>
        </div>
      </nav>
    );
  }
}

export default Header;
