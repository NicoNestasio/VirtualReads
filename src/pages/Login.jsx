import React, { useState, useEffect } from 'react';
import Logo from '../imagen/LogoVR.png';
import  '../estilos/loginVista.css';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import firebaseApp from '../firebase/credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(firebaseApp);


export function Login() {
  const navigate = useNavigate();
  const [registrando, setRegistrando] = useState(false);
  const {user, registrarUsuario} = UserAuth();


  const iniciarSesion = async()=>{
    try {
      await registrarUsuario();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(user!=null){
      navigate("/")
    }
  },[user]);

  function submitHandler(e) {
    e.preventDefault();
  
    const email = e.target.email.value;
    const contraseña = e.target.password.value;
    const nombre = e.target.nombre.value;
    const imagen = e.target.formFile.value;
  
    console.log("submit", email, contraseña, nombre, imagen);
  
    if (registrando) {
      // registrar
      registrarUsuario(email, contraseña, nombre, imagen)
    }else{
      //login
      signInWithEmailAndPassword(auth, email, contraseña);
    }
  }

  

  return (
    <div className='container'>
      <div className="row">
        {/* columna formulario */}
        <div className="col-md-6">
          <div className="padre">
            <div className='mx-4'>
              <h1 className='text-center m-2 py-2 fs-3'>{registrando ? "Registrate" : "Inicia Sesión"}</h1>
              <form onSubmit={submitHandler}>
                <input type="text"
                  name="email"
                  placeholder='Ingresar Email'
                  className='cajatexto'
                  id='email' />

                <input type="password" 
                  name='password'
                  placeholder='Ingresar Contraseña'
                  className='cajatexto'
                  id='password' />
                {/* input de Nombre */}
                {registrando ? (<input type="text" 
                  name='nombre' 
                  id='nombre' 
                  placeholder='Ingresa tu nombre completo'
                  className='cajatexto' />) : (<input type="text" 
                  className='visually-hidden' 
                  name='nombre' 
                  id='nombre' />)}
                {/* input de imagen */}
                {registrando ? (<label htmlFor="formFile" 
                  className="form-label">Elige una imagen de perfil</label>) : ( <label htmlFor="formFile" 
                  className="visually-hidden form-label"></label>) }
                {registrando ? (<input className="form-control cajatexto" 
                  type="file" 
                  id="formFile" />) : (<input className="visually-hidden" 
                  type="file" 
                  id="formFile" />) }

                <button className='btn btnform' type='submit' onClick={iniciarSesion}>{registrando ? "Registrate" : "Inicia Sesión"}</button>
              </form>
              <p className='texto'>{registrando ? "Si ya tienes cuenta" : "¿No tienes cuenta?"}<button className='btnswitch' onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia Sesión" : "Registrate"}</button></p>
            </div>
          </div>
        </div>
        {/* columna imagen */}
        <div className="col-md-6 seccionlogo">
          <img src={Logo} alt="Logo" className='tamaño-imagen' />
        </div>
      </div>
    </div>
  )
}