import { Link } from "react-router-dom";
import error from "../assets/images/404.webp";

function Error() {
  return (
    <div className="error">
      <img src={error} alt="Erreur" />

      <span>Oups! La page que vous demandez n'existe pas.</span>
      <p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </p>
    </div>
  );
}

export default Error;
