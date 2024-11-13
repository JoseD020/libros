import { useState } from "react";

import { Libro } from "../../modelos/Libro";
import { ARREGLO_LIBROS } from "../../mocks/Libro-mocks";
import { ARREGLO_LIBROS_GENEROS } from "../../utilidades/dominios/DomGenero";

export const LibroListar = () => {
  const [arrLibros] = useState<Libro[]>(ARREGLO_LIBROS);

  const obteneNombre = (valor: string) => {
    for (const objGen of ARREGLO_LIBROS_GENEROS) {
      if (objGen.codGenero == valor) {
        return objGen.nombreGenero;
      }
    }
  };

  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-10">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>Código</th>
                <th style={{ width: "35%" }}>Titulo del Libro</th>
                <th style={{ width: "30%" }}>Autor</th>
                <th style={{ width: "15%" }} className="text-center">
                  Género
                </th>
                <th style={{ width: "15%" }}>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {arrLibros.map((miLib: Libro) => (
                <tr>
                  <td>{miLib.codLibro}</td>
                  <td>{miLib.tituloLibro}</td>
                  <td>{miLib.autorLibro}</td>
                  <td className="text-center">
                    {obteneNombre(miLib.codGeneroLibro)}
                  </td>
                  <td>
                    <img
                      src={miLib.imagenLibroBase64}
                      alt="la imagen"
                      className="imagenListado"
                    />
                    <br />
                    {miLib.imagenLibro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
