import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="text-center py-2 h3">Taller El Ruedas</div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to='/'>El ruedas</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to='/list/cars'>Autos</Link>
          <Link className="nav-item nav-link" to='/list/motos'>Motos</Link>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;