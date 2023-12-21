import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Buscador from '../Components/Buscador';
import Footer from '../Components/Footer';
import { useParams } from 'react-router-dom';

export function Book({ selectedBook }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        // Realiza el fetch a la API de Google Books con el ISBN como parámetro
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${selectedBook}`);
        const data = await response.json();

        console.log('Respuesta de la API:', data); // Agregado el console.log

        // Verifica si hay resultados y actualiza el estado del libro
        if (data.items && data.items.length > 0) {
          setBook(data.items[0].volumeInfo);
        } else {
          // Manejar el caso en que no se encuentren resultados
          setBook(null);
        }
      } catch (error) {
        // Manejar errores de la petición
        console.error('Error fetching book details:', error);
        setBook(null);
      }
    };

    if (selectedBook) {
      fetchBookDetails();
    }
  }, [selectedBook]);

  return (
    <div>
      <Navbar/>
      <Buscador/>
      <br />
      <h3 className='text-center'>Detalles del Libro</h3>
      {book ? (
        <div>
          <h2 className='text-center'>{book.title}</h2>
          <img src={book.imageLinks?.thumbnail} alt={book.title} class="img-fluid rounded mx-auto d-block" />
          <p>Descripción: {book.description || 'Descripción no disponible'}</p>
          <p>Autor: {book.authors?.join(', ') || 'Desconocido'}</p>
          <p>Editorial: {book.publisher || 'Desconocido'}</p>
          <p>I.S.B.N: {book.industryIdentifiers?.[0]?.identifier || 'Desconocido'}</p>
          <p>Nro. de páginas: {book.pageCount || 'Desconocido'}</p>
          <p>Idioma: {book.language || 'Desconocido'}</p>
          <p>Formato: {book.printType || 'Desconocido'}</p>
          <p>Clasificación: {book.categories?.join(', ') || 'Desconocido'}</p>
          <p>Fecha de Publicación: {book.publishedDate || 'Desconocido'}</p>
          <p>Donde leerlo: <a href={book.previewLink || 'Desconocido'}>{book.title}</a></p>
        </div>
      ) : (
        <p>Libro no encontrado</p>
      )}
      <Footer/>
    </div>
  );
}
