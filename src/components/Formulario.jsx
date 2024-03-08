import React, { useState } from "react";
import useClima from "../hooks/useClima";

function Formulario() {

  const [alerta,setAlerta] = useState()
  const { datosBusqueda, busqueda , consultarClima} = useClima();

  const { cuidad, pais } = busqueda;

  const handleSubmit = (e) => {
    e.preventDefault();

    if(Object.values(busqueda).includes('')){
      setAlerta('Todos los campos son obligatorios')
      return
    }
    setAlerta('')
    consultarClima(busqueda)
  };
  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p> }
      <form action="" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Cuidad</label>

          <input
            type="text"
            name="ciudad"
            id="ciudad"
            value={cuidad}
            onChange={datosBusqueda}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">Pais</label>

          <select id="pais" name="pais" value={pais} onChange={datosBusqueda}>
            <option value=""> Sleccione un pais</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
}

export default Formulario;
