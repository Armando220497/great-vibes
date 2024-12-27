import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  Outlet,
} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Eventi from "./Pages/Eventi";
import Gallery from "./Pages/Gallery";
import PageNotFound from "./Pages/PageNotFound"; // Importa la pagina di errore
import Footer from "./components/footer";

// Componente App
function App() {
  return <RouterProvider router={router} />;
}

// Wrapper per gestire il layout e il footer condizionale
function Layout() {
  const location = useLocation();

  // Mostra il footer solo se non sei nella pagina Menu
  const showFooter = location.pathname !== "/menu";

  return (
    <>
      <Outlet /> {/* Renderizza i contenuti delle pagine */}
      {showFooter && <Footer />}
    </>
  );
}

// Definizione delle rotte
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />, // Usa Layout per gestire le pagine e il footer
      children: [
        { path: "/", element: <Home /> },
        { path: "/menu", element: <Menu /> },
        { path: "/eventi", element: <Eventi /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "*", element: <PageNotFound /> },
      ],
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

export default App;
