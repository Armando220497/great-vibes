import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Eventi from "./Pages/Eventi";
import Gallery from "./Pages/Gallery";
import PageNotFound from "./Pages/PageNotFound"; // Importa la pagina di errore

// Definizione delle rotte
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/eventi",
      element: <Eventi />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "*", // Match per qualsiasi percorso non definito
      element: <PageNotFound />, // Mostra la pagina di errore per tutte le rotte non definite
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
