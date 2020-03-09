import React, {Component} from 'react';

import Logo from '../../assets/logo.png';
import Brasao from '../../assets/logo_brasao.png';

export default class Header extends Component{
  render(){
    return(
      <header className="header">
        <nav className="content">
          <img src={Logo} alt="Logo"/>
          <div className="profile">
            <strong>Profile</strong>
            <img src={Brasao} alt="Profile" />
          </div>
        </nav>
      </header>
    )
  }
}