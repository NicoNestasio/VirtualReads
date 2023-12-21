import { render } from '@testing-library/react';
import './Estilos.css';
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';




function TarjetasHome({book, onCardClick}) {
  const [inicio, setInicio]=useState(0);
  const [final, setFinal]=useState(3);

    useEffect(() => {

    const interval = setInterval(() => {
    if(inicio===6){
      setInicio(0);
      setFinal(3);
    }
    else{
    setInicio(inicio+3);
    setFinal(final+3);
    }
  
}, 5000);
return () => clearInterval(interval);
},[inicio,final]);
  


  return (
    <div className='contenedortarj contenedorHome'>
      {book.map((libro, index) => ( //Mapeo de la cantidad de items que devuelve la API
        <div key={index} className={`card mb-3 tarjeta tarjetaH${index + 1}`} >
          <div className="row g-0 tarjHome">
            <div className="col-md-6">
              <Link to={`/books/${index + 1}`} style={{textDecoration: 'none'}}><img src={libro.volumeInfo.imageLinks?.thumbnail || 'URL_IMAGEN_POR_DEFECTO'} className="img-fluid rounded-start imgLibro" alt={libro.volumeInfo.title} onClick={() => onCardClick(libro)} /></Link>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <Link to={`/books/${index + 1}`} style={{textDecoration: 'none' , color: 'black'}}><h5 className="card-title" onClick={() => onCardClick(libro)}>{libro.volumeInfo.title}</h5></Link>
                <p className="card-text texto"><small className="text-body-secondary">Autor: {libro.volumeInfo.authors?.[0] || 'Desconocido'}</small></p>
                {/* <p className="card-text texto"><small>{libro.volumeInfo.description || 'Descripción no disponible'}</small></p> */}
                <p className="card-text texto"><small>Editorial: {libro.volumeInfo.publisher || 'Desconocido'}</small></p>
              </div>
            </div>
          </div>
        </div>
      )).slice(inicio, final)}
    </div>
  );
}

export default TarjetasHome;