import { useState } from "react";
import NavbarCustom from "../components/navbar.jsx";
import Orari from "../components/orari.jsx";

import "../style/Home.css";

function Home() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleNavbarToggle = (isExpanded) => {
    setIsNavbarExpanded(isExpanded);
  };

  // Funzione per gestire lo scroll verso la sezione successiva
  const handleScrollDown = () => {
    const section = document.querySelector(".container-presentazione");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavbarCustom onToggle={handleNavbarToggle} />
      <Orari />
      <div className={`body-home ${isNavbarExpanded ? "navbar-expanded" : ""}`}>
        <div className="overlay-home"></div>
        <div className="content-home">
          <h1 className="title">Great Vibes</h1>
          <div className="social">
            <a
              className="fa-brands fa-instagram"
              href="https://www.instagram.com/greatvibesbar/"
            ></a>
            <a
              className="fa-brands fa-facebook"
              href="https://www.facebook.com/greatvibesbar/"
            ></a>
            <a
              className="fa-brands fa-tiktok"
              href="https://www.tiktok.com/@greatvibesbar"
            ></a>
          </div>
        </div>
        <div className="scroll-down" onClick={handleScrollDown}>
          <i className="fa-solid fa-angles-down"></i>
        </div>
      </div>

      <section
        className="container-presentazione-section"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div className="container-presentazione container">
          <div className="row">
            <div className="col-12 col-md-6 mb-4 col-style-query">
              <h3 className="mb-4 benvenuti-titolo">
                Benvenuti al Great Vibes!
              </h3>
              <p style={{ textAlign: "start", marginLeft: "10px" }}>
                Se stai cercando un luogo dove vivere momenti indimenticabili,
                il <strong>Great Vibes Bar</strong> è la tua destinazione
                ideale. Situato in una posizione accogliente e moderna, il
                nostro bar è pensato per chi vuole rilassarsi, divertirsi e
                assaporare il meglio in un&apos;atmosfera unica.
              </p>
              <ul>
                <li>
                  <h4>🌟 Atmosfera Unica</h4>
                  <p>
                    Il nostro ambiente è progettato per farti sentire a casa:
                    musica selezionata, luci soffuse e un design curato nei
                    minimi dettagli per creare il mix perfetto tra relax e
                    intrattenimento.
                  </p>
                </li>
                <li>
                  <h4>🍹 Cocktail Esclusivi</h4>
                  <p>
                    Ogni bevanda racconta una storia. I nostri bartender esperti
                    creano cocktail unici e sorprendenti, pensati per soddisfare
                    ogni gusto, dai grandi classici alle creazioni originali.
                  </p>
                </li>
                <li>
                  <h4>🍴 Delizie da Gustare</h4>
                  <p>
                    Non solo drink! Scopri il nostro menù con stuzzichini
                    gourmet e piccoli piatti perfetti per accompagnare la tua
                    serata.
                  </p>
                </li>
                <li>
                  <h4>🎉 Eventi e Serate a Tema</h4>
                  <p>
                    Dal DJ set ai live music show, ogni settimana ti offriamo
                    nuove occasioni per divertirti in compagnia.
                  </p>
                </li>
                <li>
                  <h4>🤝 Un Team Pronto ad Accoglierti</h4>
                  <p>
                    Il nostro staff, sempre sorridente e disponibile, è qui per
                    assicurarti un’esperienza indimenticabile.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-style-query">
              <div className="proprietario-img-wrapper">
                <div className="proprietario-img"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
