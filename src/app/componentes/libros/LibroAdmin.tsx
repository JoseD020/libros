export const LibroAdmin = () => {
  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-10">
          <table className="table table-info">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>No.</th>
                <th style={{ width: "30%" }}>Titulo del Libro</th>
                <th style={{ width: "25%" }}>Autor</th>
                <th style={{ width: "15%" }} className="text-center">
                  ISBN
                </th>
                <th style={{ width: "15%" }}>Editorial</th>
                <th style={{ width: "10%" }}>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Cien años de soledad</td>
                <td>Gabriel Garcia Marquez</td>
                <td className="text-center">7788888</td>
                <td>Sudamericana</td>
                <td>
                <i className="fa-solid fa-pen-to-square" style={{color: "#FF0000"}}></i>
                &nbsp;
                &nbsp;
                <i className="fa-solid fa-trash" style={{color: "#FF0000"}}></i>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>La casa de los espiritus</td>
                <td>Isabela Allende</td>
                <td className="text-center">7778888888</td>
                <td>Rama</td>
                <td>
                <i className="fa-solid fa-pen-to-square" style={{color: "#FF0000"}}></i>
                &nbsp;
                &nbsp;
                <i className="fa-solid fa-trash" style={{color: "#FF0000"}}></i>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>El tunel</td>
                <td>Ernesto Sabato</td>
                <td className="text-center">774354588888</td>
                <td>Planeta</td>
                <td>
                <i className="fa-solid fa-pen-to-square" style={{color: "#FF0000"}}></i>
                &nbsp;
                &nbsp;
                <i className="fa-solid fa-trash" style={{color: "#FF0000"}}></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
