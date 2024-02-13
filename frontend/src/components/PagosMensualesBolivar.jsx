import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCliente } from "../api/clientesBolivar.api";
import { getAllPagos } from "../api/generarPagoBolivar.api";

export const PagosMensualesBolivar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({});
  const [error, setError] = useState(null);
  const [pagos, setPagos] = useState([]);
  const [totalPagado, setTotalPagado] = useState(0); 
  const [debe, setDebe] = useState(0);

  const handleGenerarPagoClick = () => {
    navigate(`/clientesBolivar/${id}/generarPagoBolivar`, {
      state: {
        idCliente: cliente.id,
        cedula: cliente.cedula,
        nombre: cliente.nombre_completo,
        pagosMensuales: cliente.pagos_mensuales,
        debe: debe,
      },
    });
  };
  
  useEffect(() => {
    async function loadPagos() {
      const res = await getAllPagos();
      const pagosCliente = res.data.filter(
        (pago) => pago.idCliente === cliente.id
      );
      setPagos(pagosCliente);

      const sumaPagos = pagosCliente.reduce((total, pago) => total + parseInt(pago.cantidad_pagada), 0);
      setTotalPagado(sumaPagos);
      const diferencia = parseInt(cliente.total_pagar) - sumaPagos;
      setDebe(diferencia);
    }
    loadPagos();
  }, [cliente.id, cliente.total_pagar]);

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        if (!id) {
          console.error("Cédula no definida");
          setError("Cédula no definida");
          return;
        }

        const response = await getCliente(id);
        setCliente(response.data);
      } catch (error) {
        console.error("Error al obtener cliente:", error);
        setError("Error al obtener cliente");
      }
    };

    fetchCliente();
  }, [id]);

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }
  const linkStyle = {
    backgroundColor: '#3c6d79',
    color: '#fff'
  } 
  return (
    <div className="container">
      <Link to="/clienteBolivar" className=" mt-1 btn btn-dark btn-lg">
          <i className="bi bi-arrow-left"></i>
      </Link>
      <h1 className="mt-1 text-center">Pagos Mensuales</h1>
      <h2 style={{ textTransform: "uppercase" }}>
        Cliente: {cliente.nombre_completo}
      </h2>
      <p style={{ textTransform: "uppercase" }}>
        Producto: {cliente.nombre_producto}
      </p>
      <p>Debe: ${debe}</p>
      <p>Pagado: ${totalPagado}</p>
      <p>Total a Pagar: ${cliente.total_pagar} </p>
      <p>Meses diferidos: {cliente.meses_diferidos}</p>

      <table className="table clase_table" style={{
        borderCollapse: 'separate',
        borderSpacing: '10px',
        border: '1px solid white',
        borderRadius: '15px',
        MozBorderRadius: '20px',
        padding: '2px',
      }}>
        <thead>
          <tr>
            <th scope="col">Cedula</th>
            <th scope="col">Pagos Mensuales</th>
            <th scope="col">Monto Pagado</th>
            <th scope="col">Fecha de Pago</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          {pagos.map((pago) => (
            <tr key={pago.id}>
              <td>{cliente.cedula}</td>
              <td>${cliente.pagos_mensuales}</td>
              <td>${pago.cantidad_pagada}</td>
              <td>{pago.fecha_pago}</td>
              <td>
                <button
                   className="btn" role="button" style={linkStyle}
                  onClick={() => {
                    navigate(`/pagosBolivar/${pago.id}`);
                  }}
                >
                   <i className="bi bi-pencil" style={{ color: '#f9ae65' }}></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
      <button
             className="btn" role="button" style={linkStyle}
          onClick={handleGenerarPagoClick}
        >
          Generar Pago 
        </button>
    </div>
  );
};
