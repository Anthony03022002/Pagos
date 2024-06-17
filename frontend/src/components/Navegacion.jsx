import { Link } from "react-router-dom";

export const Navegacion = () => {
  const linkStyle = {
    backgroundColor: "#f9ae65", // Cambia el color de fondo del botón
    position: "absolute",
    right: "35px", // Alinea el enlace a la derecha
    color: "#fff", // Color del texto en los enlaces
    textDecoration: "none", // Quitamos la decoración predeterminada del enlace
  };
  const linkStyles = {
    backgroundColor: "#f9ae65", // Cambia el color de fondo del botón
    position: "absolute",
    right: "190px", // Alinea el enlace a la derecha
    color: "#fff", // Color del texto en los enlaces
    textDecoration: "none", // Quitamos la decoración predeterminada del enlace
  };

  // estilos links
  const linkStyle1 = {
    position: "absolute",
    right: "35px", // Alinea el enlace a la derecha
    color: "#f9ae65", // Color del texto en los enlaces
  };
  const linkStyle3 = {
    position: "absolute",
    right: "250px", // Alinea el enlace a la derecha
    color: "#3c6d79", // Color del texto en los enlaces
    textDecoration: "none", // Quitamos la decoración predeterminada del enlace
  };

  const linkStyle2 = {
    color: "#3c6d79", // Cambia el color del texto del botón
    position: "absolute",
    right: "150px", // Alinea el enlace a la derecha
    textDecoration: "none", // Quitamos la decoración predeterminada del enlace
  };

  //
  const contenedorStyle = {
    padding: "35px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background:
      "#linear-gradient(90deg, rgba(224,226,238,1) 100%, rgba(224,226,238,1) 100%)",
    padding: "10px 20px", // Añadimos relleno para los enlaces
  };
  const backPage = {
    marginRight: "10px",
    padding: "5px",
    color: "#fff",
    textDecoration: "none",
    border: "none",
    borderRadius: "5px",
  };

  const iconStyle = {
    fontSize: "1.5rem", // Tamaño del ícono
    color: "#f9ae65",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light btn-light" href="#">
            Aplicacion de Pagos
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
              <li className="nav-item dropdown ">
                <a
                  className="nav-link  dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Clientes
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item " to="/clientes">
                      Ibarra
                    </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/clienteAngel">
                      El Angel
                    </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/clienteAtuntaqui">
                      Atuntaqui
                    </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/clienteBolivar">
                      Bolivar
                    </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/clienteCayambe">
                      Cayambe
                    </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/clienteLago">
                      Lago Agrio
                    </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/clienteOtavalo">
                      Otavalo
                    </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/clienteMira">
                      Mira
                    </Link>
                  </li>
                  <li>
                  <Link className="dropdown-item" to="/clientePimampiro">
                      Pimampiro
                    </Link>
                  </li>
                </ul>
                
              </li>
              <li className="nav-item ">
              <Link className="nav-link active text-light" to="/productos">
           Productos
          </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
                <button className="btn btn-outline-light" type="submit">
                  <a className="nav-link active" aria-current="page" href="http://127.0.0.1:8000/">Cerrar Sesion</a>
                </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
