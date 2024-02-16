import { useEffect, useState } from "react";
import { getAllClientes } from "../api/clientesBolivar.api";
import { Link, useNavigate } from "react-router-dom";
import { getAllProductos } from "../api/productos.api";


export const ClientesBolivarList = () => {
  const [clientes, setClientes] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(10);
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);


  useEffect(() => {
    const cargarClientes = async () => {
      try {
        const res = await getAllClientes();
        setClientes(res.data);
      } catch (error) {
        console.error("Error al cargar clientes:", error);
      }
    };
    cargarClientes();
  }, []);
  useEffect(() => {
    async function loadProductos() {
      try {
        const res = await getAllProductos();
        setProductos(res.data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    }

    loadProductos();
  }, []);

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentClientes = clientes
    .filter(cliente =>
      cliente.nombre_completo.toLowerCase().includes(filtroNombre.toLowerCase())
    )
    .slice(indexOfFirstElement, indexOfLastElement);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const linkStyles = {
    backgroundColor: '#f9ae65',
  } // Cambia el color de fondo del botón

  const linkStyle = {
    backgroundColor: '#3c6d79',
  } // Cambia el color de fondo del botón
  const determinarClasesFila = (cliente) => {
    const fechaVencimiento = new Date(cliente.vencimiento);
    const fechaActual = new Date();
    return fechaVencimiento < fechaActual ? 'table-danger' : "";
  };

  return (
    <div className="container">
      <div className="mb-3" >
      <h3 style={{ color: '#3c6d79', textAlign: 'center', paddingTop: '50px' }}>Clientes Bolivar</h3>
      <div className="row">
          <div className="col text-end">
            <Link
              to="/crear-clienteBolivar"
              className="btn btn-info ms-auto"
              role="button"
            >
              Crear Cliente
            </Link>
          </div>
        </div>
        <label htmlFor="filtroNombre" className="form-label"><h4 style={{ color: '#3c6d79' }}>Buscar Cliente:</h4></label>
        <input
          type="text"
          className="form-control"
          id="filtroNombre"
          value={filtroNombre}
          onChange={(e) => setFiltroNombre(e.target.value)}
        />
      </div>
      <table className="table table-hover" style={{
        borderCollapse: 'separate',
        borderSpacing: '1px',
        border: '1px solid white',
        borderRadius: '15px',
        MozBorderRadius: '20px',
        padding: '2px',
      }}>
        <thead>
          <tr>
            <th scope="col">Cedula</th>
            <th scope="col">Nombre Completo</th>
            <th scope="col">Meses diferidos</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad del Producto</th>
            <th scope="col">Total a Pagar</th>
            <th scope="col">Pagos Mensuales</th>
            <th scope="col">Fecha próximo pago</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentClientes.map((cliente) => (
            <tr key={cliente.cedula} className={determinarClasesFila(cliente)}>
              <td>{cliente.cedula}</td>
              <td>{cliente.nombre_completo}</td>
              <td>{cliente.meses_diferidos}</td>
              <td>{productos.find(producto => producto.id === cliente.nombre_producto)?.nombre_producto || ''}</td>
              <td>{cliente.cantidad_producto}</td>
              <td>{cliente.total_pagar}</td>
              <td>{cliente.pagos_mensuales}</td>
              <td>{cliente.vencimiento}</td>
              <td>
                <button className="btn" role="button" style={linkStyles}>
                  <Link to={`/clientesBolivar/${cliente.id}/PagosMensualesBolivar`}>
                    <i className="bi bi-file-earmark-person-fill" style={{ color: '#3c6d79' }}></i>
                  </Link>
                </button>
                <button
                  className="btn" role="button" style={linkStyle}
                  onClick={() => navigate(`/clienteBolivar/${cliente.id}`)} >
                  <i className="bi bi-pencil" style={{ color: '#f9ae65' }}></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(clientes.length / elementsPerPage) }, (_, i) => (
            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
