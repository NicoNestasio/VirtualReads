import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Buscador from '../Components/Buscador';
import Tarjeta from '../Components/Tarjeta';
import Footer from '../Components/Footer';

export function Buscar({ onCardClick }) {
  const [bookData, setBookData] = useState([]);

  // Función para recibir los datos de búsqueda desde Buscador
  const handleBookData = (data) => {
    setBookData(data);
  };

  const handleCardClick = (book) => {
    const isbn = book.volumeInfo.industryIdentifiers?.[0]?.identifier; // Obtén el ISBN del libro
    onCardClick(isbn); // Llama a la función proporcionada desde las props con el ISBN
    // También puedes navegar a la página Book directamente aquí si es necesario
  };

  // Utiliza useEffect para manejar la lógica dependiente de bookData
  useEffect(() => {
    // La lógica que depende de bookData se coloca aquí
    // Puede ser la lógica de renderizado de tarjetas, etc.
    console.log('Datos de libros actualizados:', bookData);
  }, [bookData]);

  return (
    <div>
      <Navbar />
      <Buscador onBookData={handleBookData} />
      <Tarjeta book={bookData} onCardClick={handleCardClick} />
      <Footer />
    </div>
  );
}
