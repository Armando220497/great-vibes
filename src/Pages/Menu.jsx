import { useEffect, useState } from "react";
import NavbarCustom from "../components/navbar.jsx";

import "../style/Menu.css";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => setMenu(data))
      .catch((error) =>
        console.error("Errore nel caricamento del menu:", error)
      );
  }, []);

  const handleNavbarToggle = (isExpanded) => {
    // Cambia il margin-top in base allo stato della navbar
    if (isExpanded) {
      setNavbarHeight(150); // Altezza quando la navbar è espansa
    } else {
      setNavbarHeight(0); // Rimuove il margine quando la navbar è chiusa
    }
  };

  return (
    <>
      <div className="body-menu">
        <div className="overlay-menu"></div>
        <NavbarCustom onToggle={handleNavbarToggle} />
        <div
          className="content-menu"
          style={{ marginTop: `${navbarHeight}px` }}
        >
          <div className="menu-container">
            {menu.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h1 className="title-menu" style={{ textAlign: "start" }}>
                  {category.category}
                </h1>
                {category.items.map((item, itemIndex) => (
                  <div
                    className="menu-item"
                    style={{ textAlign: "start" }}
                    key={itemIndex}
                  >
                    <div className="menu-item-left">
                      <div className="menu-item-title">{item.name}</div>
                      <div className="menu-item-description">
                        {item.description}
                      </div>
                    </div>
                    <div className="menu-item-price">{item.price}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
