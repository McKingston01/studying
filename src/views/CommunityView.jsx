import React from 'react';
import { Link } from "react-router-dom";

function CommunityView() {
  return (
    <div>
      <h1>Nuestra Comunidad</h1>
      <Link to="/aboutus">
        <button>Quieres saber más sobre nosotros?</button>
      </Link>
    </div>
  );
}

export default CommunityView;