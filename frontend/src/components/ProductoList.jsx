import React, { useEffect, useState } from "react";
import { getAllProductos } from "../api/productos.api";
import { useNavigate, Link } from "react-router-dom";
import { Pagination } from "./Paginacion";

export const ProductoList = () => {
  const [productos, setProductos] = useState([]);
  const [filtroNombre, setFiltroNombre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProductos() {
      const res = await getAllProductos();
      setProductos(res.data);
    }
    loadProductos();
  }, []);

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentProductos = productos
    .filter(producto =>
      producto.nombre_producto.toLowerCase().includes(filtroNombre.toLowerCase())
    )
    .slice(indexOfFirstElement, indexOfLastElement);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(productos.length / elementsPerPage);

  const getPaginationItems = () => {
    let items = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (startPage > 1) {
      items.push(
        <li key={1} className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageClick(1)}>
            {1}
          </button>
        </li>
      );
      if (startPage > 2) {
        items.push(
          <li key="ellipsis-start" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageClick(i)}>
            {i}
          </button>
        </li>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(
          <li key="ellipsis-end" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        );
      }
      items.push(
        <li key={totalPages} className={`page-item ${currentPage === totalPages ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageClick(totalPages)}>
            {totalPages}
          </button>
        </li>
      );
    }

    return items;
  };

  const linkStyle = {
    backgroundColor: '#3c6d79',
  } 

  return (
    <div className="container">
      <h3 style={{ color: "#3c6d79", textAlign: "center", paddingTop: "50px" }}>
        Productos
      </h3>
      <div className="row">
        <div className="col text-end">
          <Link to="/crear-producto" className="btn btn-info ms-auto" role="button">
            Crear Producto
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="filtroNombre" className="form-label">Buscar Producto:</label>
          <input
            type="text"
            className="form-control"
            id="filtroNombre"
            value={filtroNombre}
            onChange={(e) => setFiltroNombre(e.target.value)}
          />
        </div>
      </div>
      <br />
      <table className="table table-striped table-hover" style={{
        borderCollapse: 'separate',
        borderSpacing: '1px',
        border: '1px solid white',
        borderRadius: '15px',
        MozBorderRadius: '20px',
        padding: '2px',
      }}>
        <thead>
          <tr>
            <th scope="col">Nombre del producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {currentProductos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre_producto}</td>
              <td>{producto.precio}</td>
              <td>
                <button
                  className="btn" role="button" style={linkStyle}
                  onClick={() => navigate(`/productos/${producto.id}`)}
                >
                  <i className="bi bi-pencil" style={{ color: '#f9ae65' }}></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};
