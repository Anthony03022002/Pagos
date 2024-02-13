import { useForm } from "react-hook-form";
import { createPagos } from "../api/generarPago.api";
import { useNavigate, useLocation } from "react-router-dom";
import jsPDF from "jspdf";

export const GenerarPago = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { idCliente, pagosMensuales, debe, cedula, nombre } = location.state || {};

  const onSubmit = handleSubmit(async (data) => {
    await createPagos({ ...data, id: idCliente,  });

    const pdf = new jsPDF();

    // Encabezado
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text("Comprobante de Pago de C&M Sports", 50, 20);

    // Contenido principal
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.text(
      ` El cliente ${nombre} con número de cedula ${cedula} realizo el pago por el valor de: $${data.cantidad_pagada}`,
      20,
      40
    );
    pdf.text(`Fecha de Pago: ${data.fecha_pago}`, 20, 60);
    pdf.text(`Monto pendiente: $${debe- data.cantidad_pagada}`,20,80);


    // Línea divisoria
    pdf.setLineWidth(0.5);
    pdf.line(20, 100, 190, 100);


    // Guardar el PDF
    pdf.save(`Comprobante_de_pago_${nombre}.pdf`);

    // Redirigir a la página de pagos mensuales
    navigate(`/clientes/${idCliente}/pagosMensuales`);
  });

  return (

    <div className="container">
      <form onSubmit={onSubmit} >
        <h1>Formulario de Pago</h1>
        <h3>Pago Mensual: ${pagosMensuales}</h3>
        <label htmlFor="inputEmail4" className="form-label">
          id
        </label>
        <input
          className="form-control"
          type="number"
          value={idCliente}
          {...register("idCliente", { required: true })}
          readOnly
        />
        <label htmlFor="inputEmail4" className="form-label">
          Fecha:
        </label>
        <input
          className="form-control"
          type="date"
          placeholder="Fecha de pago"
          {...register("fecha_pago", { required: true })}
        />
       
        <label htmlFor="inputEmail4" className="form-label">
          Monto a pagar:
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Monto Pagado"
          {...register("cantidad_pagada", {
            required: true,
            pattern: /^[0-9]+(\.[0-9]{1,2})?$/, // Acepta números con hasta 2 decimales
          })}
        />
        <button className="btn btn-success float-end" style={{ position: 'absolute', right: '180px', backgroundColor: '#17494d', top: '500px' }}>  Guardar Pago
        </button>
      </form>
    </div>
  );
};
