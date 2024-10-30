export const LibroCrear = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="row g-3 needs-validation">
            <div className="col-md-6">
              <label htmlFor="nomb" className="form-label">
                Titulo del libro
              </label>
              <input
                type="text"
                className="form-control"
                id="nomb"
                name="nomb"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="auto" className="form-label">
                Autor
              </label>
              <input
                type="text"
                className="form-control"
                id="auto"
                name="auto"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="isb" className="form-label">
                ISBN
              </label>
              <input
                type="text"
                className="form-control"
                id="isb"
                name="isb"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="edit" className="form-label">
                Editorial
              </label>
              <select className="form-select" id="edit" required>
                <option selected disabled value="">
                  Seleccione la editorial
                </option>
                <option>Grupo Planeta</option>
                <option>Grupo Santillana</option>
                <option>Rama</option>
                <option>Sudamericana</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid state.
              </div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Registrar libro
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
