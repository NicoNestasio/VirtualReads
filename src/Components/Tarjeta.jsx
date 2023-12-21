import './Estilos.css';
import React ,{useState} from 'react';
import { Link } from 'react-router-dom';



function Tarjeta({ book, onCardClick}) {
  const [inicio, setInicio]=useState(0);
  const [final, setFinal]=useState(9);

  function ira1(){
    setInicio(0);
    setFinal(9);
  }

  function ira2(){
    setInicio(9);
    setFinal(18);
  }

  function ira3(){
    setInicio(18);
    setFinal(27);
  }
  function pagAnt(){
    if(inicio===0){
      setInicio(0);
      setFinal(9);
    }
    else{
      setInicio(inicio-9);
      setFinal(final-9);
    }
  }
  function pagSig(){
    setInicio(inicio+9);
    setFinal(final+9);
  }

  return (
    <div>
    <div className='contenedortarj grid container'>
      {book.map((libro, index) => ( //Mapeo de la cantidad de items que devuelve la API
        <div key={index} className={`card mb-3 tarjeta tarjeta${index + 1}`}>
          <div className="row g-0 tarjBusc">
            <div className="col-md-6">
            <Link to={`/books/${index + 1}`} style={{textDecoration: 'none'}}><img src={libro.volumeInfo.imageLinks?.thumbnail || 'URL_IMAGEN_POR_DEFECTO'} className="img-fluid rounded-start imgLibro" alt={libro.volumeInfo.title} onClick={() => onCardClick(libro)} /></Link>
            </div>
            <div className="col-md-6">
              <div className="card-body text-start">
                <Link to={`/books/${index + 1}`} style={{textDecoration: 'none', color: 'black'}}><h5 className="card-title">{libro.volumeInfo.title}</h5></Link>
                <p className="card-text texto"><small className="text-body-secondary">Autor: {libro.volumeInfo.authors?.[0] || 'Desconocido'}</small></p>
                {/* <p className="card-text texto"><small>{libro.volumeInfo.description || 'Descripción no disponible'}</small></p> */}
                <p className="card-text texto"><small>Editorial: {libro.volumeInfo.publisher || 'Desconocido'}</small></p>
              </div>
            </div>
          </div>
        </div>
        
      )).slice(inicio, final)}
      </div>
      <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li class="page-item"><a class="page-link" onClick={pagAnt}href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" onClick={ira1} href="#">1</a></li>
    <li class="page-item"><a class="page-link" onClick={ira2} href="#">2</a></li>
    <li class="page-item"><a class="page-link" onClick={ira3} href="#">3</a></li>
    <li class="page-item"><a class="page-link" onClick={pagSig} href="#">Next</a></li>
  </ul>
    </nav>
    </div>
    
  );
}

export default Tarjeta;