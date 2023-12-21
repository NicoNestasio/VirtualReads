import './Estilos.css'
import React ,{useState}from "react";
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";
    
function Buscador({onBookData}) {
const [search,setSearch]=useState("");
const [genre, setGenre] = useState('Género');
const [author, setAuthor] = useState('Autor');
const [language, setLanguage] = useState('Idioma');
const [startDate, setStartDate] = useState(new Date());
const [startDate2, setStartDate2] = useState(new Date());
//Función para buscar los libros
function buscarLibros(){
    // var search = document.getElementById('searchInput').value;
    const apiUrl =
    'https://www.googleapis.com/books/v1/volumes?q=' +
    search +
    // (genre !== 'Género' ? `+subject:${genre}` : '') +
    (startDate.getFullYear !== '2023' ? `+before:1+ene+${startDate.getFullYear()}` : '') +
    (startDate2.getFullYear !== '2023' ? `+after:1+ene+${startDate2.getFullYear()}` : '') +
  
    (author !== 'Autor' ? `&inauthor:${author}` : '') +
    (language !== 'Idioma' ? `&langRestrict=${language}` : '') +
    `&key=AIzaSyDfeBesAAxCA8CyF3ebH1-ea_wYUna70rQ&maxResults=40`;

    //  +
    // (publisher !== 'Editorial' ? `&inpublisher=${publisher}` : '') +
    // (year !== 'Año de publicación' ? `&publishedDate=${year}` : '') +
    // (isbn !== 'Codigo ISBN' ? `&isbn=${isbn}` : '') +
    // (author !== 'Autor' ? `&inauthor=${author}` : '') +
    // (language !== 'Idioma' ? `&language=${language}` : '') +
    // (edition !== 'Edición' ? `&edition=${edition}` : '');

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos.');
        }
        return response.json();
      })
      .then(data => {
        console.log('Respuesta de la API:', data);
        onBookData(data.items);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
    
    };

    function busquedaRapida(){
        // var search = document.getElementById('searchInput').value;
        const apiUrl =
        'https://www.googleapis.com/books/v1/volumes?q=' +
        search +
        `&key=AIzaSyDfeBesAAxCA8CyF3ebH1-ea_wYUna70rQ&maxResults=40`;
    
        //  +
        // (publisher !== 'Editorial' ? `&inpublisher=${publisher}` : '') +
        // (year !== 'Año de publicación' ? `&publishedDate=${year}` : '') +
        // (isbn !== 'Codigo ISBN' ? `&isbn=${isbn}` : '') +
        // (author !== 'Autor' ? `&inauthor=${author}` : '') +
        // (language !== 'Idioma' ? `&language=${language}` : '') +
        // (edition !== 'Edición' ? `&edition=${edition}` : '');
    
        fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Error al obtener los datos.');
            }
            return response.json();
          })
          .then(data => {
            console.log('Respuesta de la API:', data);
            onBookData(data.items);
          })
          .catch(error => {
            console.error('Error:', error);
          });
          
        
        };
      

  return ( 
    <div className='buscador'>
        <nav class="navbar">
            <div class="container-fluid colorBuscador">
                <img src="https://images.vexels.com/media/users/3/143466/isolated/preview/b47bfb19d11e66c3be00ccb0632047ce-lupa-simple.png" class="img-fluid" width="30" height="30" />
                <form class="d-flex mt-3" role="search">
                    <input id='searchInput' class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" value={search} onChange={e=>setSearch(e.target.value)}/>
                    <Link to='/buscar' onClick={busquedaRapida}><button class="btn btn-outline-dark">Buscar</button> </Link>
                </form>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBuscador" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span ><img src="https://cdn-icons-png.flaticon.com/512/6526/6526846.png" class="img-fluid"  width="30" height="30"/></span>
                </button>
                <div class="offcanvas offcanvas-end header" tabindex="-1" id="offcanvasBuscador" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Personalizar búsqueda</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3"> 

                            <input id='searchInput' class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" value={search} onChange={e=>setSearch(e.target.value)}/>                           
                            <br/>

                            <select class="form-select" aria-label="Default select example"onChange={(e) => setGenre(e.target.value)} >
                                <option selected>Género</option>
                                <option value="fantasy">Fantasía</option>
                                <option value="mystery">Misterio</option>
                                <option value="religion">Religión</option>
                            </select>
                            <br/>



                            <DatePicker selected={startDate2} onChange={(date) => setStartDate2(date)} showYearPicker dateFormat="yyyy"  />

                            <br/>

                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showYearPicker dateFormat="yyyy"  />

                            <br/>


                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label float-start px-2">Autor</label>
                                <input type="text" class="form-control" aria-describedby="Default text example" onChange={(e) => setAuthor(e.target.value)} />
                            </div>
                            <br/>

                            <select class="form-select" aria-label="Default select example" onChange={(e) => setLanguage(e.target.value)}>
                                <option selected>Idioma</option>
                                <option value="en">Inglés</option>
                                <option value="es">Español</option>
                                <option value="pt">Portugués</option>
                                <option value="fr">Francés</option>
                            </select>
                            <br/>


                        </ul>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                        <Link to='/buscar' onClick={buscarLibros}><button type="button" class="btn btn-primary">Aplicar</button></Link>
                        </div>
      </div>
    </div>
    </div>
    </nav>
    </div>

    
   )
}

export default Buscador