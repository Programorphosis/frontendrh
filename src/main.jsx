import { StrictMode } from "react";
import {HeroUIProvider} from "@heroui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App.jsx";
import ProviderLogin from "./context/GlobalContextProvider.jsx";
import ProviderReservations from "./context/reservationsContextProvider.jsx";
import { APIProvider } from "@vis.gl/react-google-maps";


import ProviderLocatiom from "./context/GeoLocationContextProvider.jsx";
const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroUIProvider>
    <APIProvider apiKey={apiKey}>
      <ProviderLocatiom>
        <BrowserRouter>
          <ProviderLogin>
            <ProviderReservations>
              <App />
            </ProviderReservations>
          </ProviderLogin>
        </BrowserRouter>
      </ProviderLocatiom>
    </APIProvider>
    </HeroUIProvider>
  </StrictMode>
);
