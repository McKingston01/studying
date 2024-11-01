import { Link } from 'react-router-dom';

function HomeView() {
    return (
      <div>
        <h1>Bienvenido a la Página Principal</h1>
        <p>Esta es la vista de inicio.</p>
        <Link to="/register">
            <button className="bg-customGreen font-semibold px-6 py-2 my-4 rounded-md">Registrate</button>
          </Link>
      </div>
    );
  }
  
  export default HomeView;