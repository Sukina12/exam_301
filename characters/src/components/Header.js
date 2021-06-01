import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href= '/'>HomePage</a></li>
          <li><a href ='/favorite'>Favorite Page</a></li>
        </ul>

      </nav>
    )
  }
}

export default Header;
