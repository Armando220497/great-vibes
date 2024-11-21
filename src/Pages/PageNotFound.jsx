import { useNavigate } from "react-router-dom";
import "../style/PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Torna alla pagina precedente
  };

  return (
    <div className="page-not-found">
      <h1>Oops! Pagina non trovata</h1>
      <p>La pagina che stai cercando non esiste o è stata rimossa.</p>
      <button onClick={handleGoBack} className="go-back-btn">
        Torna indietro
      </button>
    </div>
  );
}

export default PageNotFound;
