import { useForm } from "react-hook-form";
import { createPagos } from "../api/generarPagoCayambe.api";
import { useNavigate, useLocation } from "react-router-dom";
import jsPDF from "jspdf";

export const GenerarPagoCayambe = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { idCliente, pagosMensuales, debe, cedula, nombre } = location.state || {};

  const onSubmit = handleSubmit(async (data) => {
    const { esDescuento, cantidad_pagada, fecha_pago } = data;
    await createPagos({ ...data, id: idCliente });

    const pdf = new jsPDF();

    // Encabezado
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.text("Comprobante de Pago de C&M Sports", 50, 20);

    // Contenido principal
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.text(
      `El cliente ${nombre} con número de cedula ${cedula} realizó el pago por el valor de: $${cantidad_pagada}`,
      20,
      40
    );
    pdf.text(`Fecha de Pago: ${fecha_pago}`, 20, 60);
    pdf.text(`Monto pendiente: $${debe - cantidad_pagada}`, 20, 80);

    // Verificar si es un descuento y agregar esa información al PDF
    if (esDescuento) {
      pdf.text("Este pago es un descuento.", 20, 100);
    }

    // Línea divisoria
    pdf.setLineWidth(0.5);
    pdf.line(20, 120, 190, 120);

    // Guardar el PDF
    pdf.save(`Comprobante_de_pago_${nombre}.pdf`);

    // Redirigir a la página de pagos mensuales
    navigate(`/clientesCayambe/${idCliente}/pagosMensualesCayambe`);
  });

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>Formulario de Pago</h1>
        <h3>Pago Mensual: ${pagosMensuales}</h3>
        <label htmlFor="inputEmail4" className="form-label">
          ID
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
        <br />
        <label htmlFor="esDescuento" className="form-check-label">
          Descuento:
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          {...register("esDescuento")}
        />
        <button className="btn btn-success float-end" style={{ position: 'absolute', right: '180px', backgroundColor: '#17494d', top: '500px' }}>
          Guardar Pago
        </button>
      </form>
    </div>
  );
};
