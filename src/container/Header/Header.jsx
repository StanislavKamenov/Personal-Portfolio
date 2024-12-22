import React from 'react';
import backimage from '../../assets/back.jpeg';
import me from '../../assets/me.png';
import './header.css';

function Header() {
    return (
      <div className="header-container">
        <div className='hello'>
            <p>Hello, I am</p>
            <h1>Stanislav</h1>
        </div>
        <img className="header-image" src={backimage} alt="Background" />
        <img src={me} className="human-image" alt="" />
        <div className="icon html">HTML</div>
        <div className="icon css">CSS</div>
        <div className="icon js">JS</div>
        <div className="icon react">React</div>
      </div>
    );
}

export default Header;
