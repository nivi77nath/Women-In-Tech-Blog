import React from 'react';
import './stylesHeader.scss';

function Header() {
  return (
      <div>
        <header>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#form">Add Post</a></li>
                    <li><a href="#about">View Post</a></li>
                   
                </ul>
            </nav>

            <div className="fas fa-hamburger"></div>

            <a href="" className="logo"></a>
        </header>
      </div>
  );
}

export default Header;
