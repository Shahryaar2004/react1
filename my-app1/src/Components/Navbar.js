import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <span className="navbar-brand"> {props.title}</span>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <link className="nav-item active">
            <button className="nav-linknk" onClinkck={() => {/* navigate to home */}}>Home</button>
          </link>
          <link className="nav-item">
            <button className="nav-linknk" onClinkck={() => {/* navigate to about */}}>{props.about}</button>
          </link>
          <link className="nav-item">
            <button className="nav-link" onClick={() => {/* navigate to contact */}}>Contact</button>
          </link>
        </ul>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input 
          className="form-check-input" 
          onClick={props.toggleMode} 
          type="checkbox" 
          id="flexSwitchCheckDefault" 
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable Dark Mode
        </label>
      </div>
      <div className={`mx-3 form-check form-switch text-${props.mode1 === 'light' ? 'red' : 'light'}`}>
        <input 
          className="form-check-input" 
          onClick={props.toggleMode1} 
          type="checkbox" 
          id="flexSwitchCheckDefault2" 
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">
          Enable Red Mode
        </label>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  title: 'Set title here',
  about: 'Enter about'
};
