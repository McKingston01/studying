// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate('/')}>Home |</button>
      <button onClick={() => navigate('/aboutus')}> Nosotros |</button>
      <button onClick={() => navigate('/community')}> Comunidad |</button>
      <button onClick={() => navigate('/courses')}> Cursos |</button>
      <button onClick={() => navigate('/login')}> Inicia Sesión</button>
    </nav>
  );
}

export default Navbar;