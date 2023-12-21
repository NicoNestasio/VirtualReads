import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import './Estilos.css';
import LogoVR from '../imagen/LogoVR.png'; 
function Navbar() {
  const {logOut} = UserAuth();

  const cerrarSesion = async() =>{
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark" id='navbar'>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to={"/"} style={{textDecoration: 'none'}}><a className="navbar-brand" href="#"><img className='logo' src={LogoVR} alt="VirtualReads" /></a></Link>

          <a className="navbar-brand" href="#">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg" width="40" height="40" alt="imagen" />
          </a>
          <div className="offcanvas offcanvas-start header" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Usuario</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <button onClick={cerrarSesion}>Cerrar Sesión</button>           
                </li>
                {/* <li class="nav-item">
            <a class="nav-link" href="/login" > <img src="https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg" width="30" height="30"/> Registrarse</a>
          </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>


  )
}

export default Navbar

