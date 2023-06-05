import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h1>404</h1>

      <span>Oups! La page que vous demandez n'existe pas.</span>
      <p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </p>
    </div>
  );
}

export default Error;
