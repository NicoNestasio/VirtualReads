import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Buscador from '../Components/Buscador';
import TarjetasHome from '../Components/TarjetasHome';
import Recomendados from '../Components/Recomendados';
import Footer from '../Components/Footer';

export function Home({ onCardClick }) {
  const [bookData, setBookData] = useState([]);

  const handleBookData = (data) => {
    setBookData(data);
  };

  const handleCardClick = (book) => {
    const isbn = book.volumeInfo.industryIdentifiers?.[0]?.identifier;
    onCardClick(isbn); // Llama a la función proporcionada desde las props con el ISBN
    // También puedes navegar a la página Book directamente aquí si es necesario
  };

  return (
    <div>
      <Navbar />
      <Buscador onBookData={handleBookData} />
      <Recomendados onBookData={handleBookData} />
      <TarjetasHome book={bookData} onCardClick={handleCardClick} />
      <Footer />
    </div>
  );
}
