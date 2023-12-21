import './App.css';
import React from 'react';
import { AuthContextProvider } from './context/AuthContext';
import { MisRutas } from './routes/routes';

function App() {
  
  return (
      <AuthContextProvider>
        <div>
          <MisRutas />
        </div>
      </AuthContextProvider>
  );
}

export default App;
