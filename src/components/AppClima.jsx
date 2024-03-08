import React from "react";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima";
import Loading from "./Loading";

function AppClima() {
  const { resultado, cargando, noResultado } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? (
          <Loading />
        ) : resultado?.name ? (
          <Resultado />
        ) : noResultado ? (
          <p>{noResultado}</p>
        ) : (
          <div className="iconTemp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="250"
              viewBox="0 -960 960 960"
              width="200"
              fill="#54c3ff"
            >
              <path d="M481.231-545.538v-36.924h189.538v36.924H481.231Zm0-144.616v-36.923h305.115v36.923H481.231ZM330.142-167.269q-64.681 0-109.719-44.957-45.039-44.957-45.039-109.505 0-40.986 20.943-76.743 20.942-35.757 58.327-58.642v-260.922q0-31.491 21.612-53.342t53.83-21.851q31.866 0 53.654 21.851 21.789 21.851 21.789 53.342v260.922q37.5 22.885 58.442 58.642 20.942 35.757 20.942 76.743 0 64.548-45.05 109.505-45.051 44.957-109.731 44.957ZM212.308-321.731H448q0-29.154-16.261-56.809-16.261-27.655-46.816-50.075l-16.308-12v-277.423q0-15.827-11.232-27.049-11.233-11.221-27.327-11.221t-27.287 11.221q-11.192 11.222-11.192 27.049v277.423l-16.308 12q-30.423 22.23-46.692 49.98-16.269 27.75-16.269 56.904Z" />
            </svg>
          </div>
        )}
      </main>
    </>
  );
}

export default AppClima;
