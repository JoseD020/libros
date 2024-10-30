export const LibroListar = () => {
  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-10">
          <table className="table table-info">
            <thead>
              <tr>
                <th style={{width: "5%"}}>No.</th>
                <th style={{width: "35%"}}>Titulo del Libro</th>
                <th style={{width: "30%"}}>Autor</th>
                <th style={{width: "15%"}} className="text-center">ISBN</th>
                <th style={{width: "15%"}}>Editorial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Cien años de soledad</td>
                <td>Gabriel Garcia Marquez</td>
                <td className="text-center">7788888</td>
                <td>Sudamericana</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>La casa de los espiritus</td>
                <td>Isabela Allende</td>
                <td className="text-center">7778888888</td>
                <td>Rama</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>El tunel</td>
                <td>Ernesto Sabato</td>
                <td className="text-center">774354588888</td>
                <td>Planeta</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
