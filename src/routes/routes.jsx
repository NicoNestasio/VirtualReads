// MisRutas.jsx
import React, {useState} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Buscar } from "../pages/Buscar";
import { UserAuth } from "../context/AuthContext";
import { Book } from "../pages/Book";

export function MisRutas() {
  const { user } = UserAuth();
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCardClick = (isbn) => {
    setSelectedBook(isbn);
  };

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to={"/login"} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequireAuth><Home onCardClick={handleCardClick} /></RequireAuth>} />
        <Route path="/buscar" element={<RequireAuth><Buscar onCardClick={handleCardClick} /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/books/:id" element={<RequireAuth><Book selectedBook={selectedBook} /></RequireAuth>} />
      </Routes>
    </BrowserRouter>
  );
}
