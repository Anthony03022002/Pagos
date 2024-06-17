import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  createCliente,
  deleteCliente,
  updateCliente,
  getCliente,
} from "../api/clientesAtuntaqui.api";
import { getAllProductos } from "../api/productos.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";


export const ClienteAtuntaquiForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [productos, setProductos] = useState([]);
  const [mesesDiferidos, setMesesDiferidos] = useState(8);
  const [precioSeleccionado, setPrecioSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(0);
  const [pagosMensuales, setPagosMensuales] = useState(0);

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    data.pagos_mensuales = pagosMensuales;
    if (params.id) {
      await updateCliente(params.id, data);
      toast.success("Actualizado correctamente", {
        position: "top-center",
        style: {
          background: "#101010",
          color: "#fff",
          marginTop: "60px",
        },
      });
    } else {
      await createCliente(data);
      toast.success("Cliente creado correctamente", {
        position: "top-center",
        style: {
          background: "#101010",
          color: "#fff",
          marginTop: "60px",
        },
      });
    }
    navigate("/clienteAtuntaqui");
  });

  const obtenerFechaActual = () => {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
    const dia = String(fechaActual.getDate()).padStart(2, "0");
    return `${año}-${mes}-${dia}`;
  };

  useEffect(() => {
    async function loadCliente() {
      if (params.id) {
        const { data } = await getCliente(params.id);
        setValue("id", data.id);
        setValue("cedula", data.cedula);
        setValue("nombre_completo", data.nombre_completo);
        setValue("email", data.email);
        setValue("direccion", data.direccion);
        setValue("fecha_inicio", data.fecha_inicio);
        setValue("nombre_producto", data.nombre_producto);
        setValue("cantidad_producto", data.cantidad_producto);
        setValue("total_pagar", data.total_pagar);
        setValue("pagos_mensuales", data.pagos_mensuales);
        setValue("vencimiento", data.vencimiento);
        setValue("estado", data.estado);
        setValue("meses_diferidos", data.meses_diferidos);
        setPagosMensuales(data.pagos_mensuales);
        setCantidad(data.cantidad_producto);
        const producto = productos.find(
          (p) => p.id === parseInt(data.nombre_producto)
        );
        if (producto) {
          setPrecioSeleccionado(producto.precio);
          setCantidad(data.cantidad_producto || 0);
        } else {
          setPrecioSeleccionado(null);
          setCantidad(0);
        }
      }
    }
    loadCliente();
  }, [params.id, setValue, productos]);

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
  const handlePagosMensualesChange = (e) => {
    const value = parseFloat(e.target.value);
    setPagosMensuales(value);
  };
  const handleProductoChange = (event) => {
    const productoSeleccionado = event.target.value;
    const producto = productos.find(
      (p) => p.id === parseInt(productoSeleccionado)
    );
  
    if (producto) {
      setPrecioSeleccionado(producto.precio);
      setCantidad(1);
      setValue("total_pagar", producto.precio);
    } else {
      setPrecioSeleccionado(null);
      setCantidad(0);
      setValue("total_pagar", null);
    }
  };
  const handleCantidadChange = (event) => {
    const nuevaCantidad = parseInt(event.target.value, 10);
    setCantidad(nuevaCantidad);
    setValue("total_pagar", precioSeleccionado * nuevaCantidad || null);
  };
  const handleMesesDiferidosChange = (event) => {
    const nuevosMesesDiferidos = parseInt(event.target.value, 10);
    setMesesDiferidos(nuevosMesesDiferidos);
    const totalPagar = cantidad * precioSeleccionado;
    const nuevosPagosMensuales = totalPagar / nuevosMesesDiferidos;
    const pagosMensualesConDosDecimales = parseFloat(
      nuevosPagosMensuales.toFixed(2)
    );
    setPagosMensuales(pagosMensualesConDosDecimales);
  };

  return (
    <div className="container mt-2">
       <Link to="/clienteAtuntaqui" className="btn btn-dark btn-lg">
          <i className="mt-1 bi bi-arrow-left"></i>
      </Link>
      <form onSubmit={onSubmit} className="row mt-1 g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Cedula
          </label>
          <div>
          <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su cedula"
                  maxLength={10}
                  {...register("cedula", { required: true })}
                />
          </div>

          {errors.id && <span>La cedula es requerida</span>}
        </div>
        <div className="col-md-6">
          <label className="form-label">Precio del Producto</label>
          <input
            className="form-control"
            type="number"
            readOnly
            value={precioSeleccionado || ""}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Nombre Completo
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Completo"
            maxLength={30}
            {...register("nombre_completo", { required: true })}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Semanas Diferidas:</label>
          <select
            className="form-select"
            {...register("meses_diferidos", { required: true })}
            value={mesesDiferidos}
            onChange={handleMesesDiferidosChange} // Agregar evento onChange
          >
            {[4, 8, 12].map((meses) => (
              <option key={meses} value={meses}>
                {`${meses} semanas`}
              </option>
            ))}
          </select>
        </div>

        {errors.meses_diferidos && <span>Este campo es requerido</span>}
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Correo Electronico
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Correo Electronico"
            maxLength={50}
            {...register("email", { required: true })}
          />
          {errors.email && <span>Este campo es requerido</span>}
        </div>
        <div className="col-md-6">
          <label className="form-label">Total a pagar</label>
          <input
            className="form-control"
            type="number"
            {...register("total_pagar", { required: true })}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Direccion
          </label>
          <textarea
            className="form-control"
            placeholder="Ingrese su dirección"
            maxLength={100}
            {...register("direccion", { required: true })}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Pagos Mensuales:</label>
          <input
            className="form-control"
            type="number"
            placeholder="Pagos Mensuales"
            {...register("pagos_mensuales", { required: true })}
            value={pagosMensuales}
            onChange={handlePagosMensualesChange}
            readOnly
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Producto:</label>
          <select
            className="form-select"
            {...register("nombre_producto", { required: true })}
            onChange={handleProductoChange}
          >
            <option value="">Seleccione un producto</option>
            {productos.map((producto) => (
              <option
                key={producto.id}
                value={producto.id}
              >
                {producto.nombre_producto}
              </option>
            ))}
          </select>
          {errors.nombre_producto && <span>Este campo es requerido</span>}
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Fecha de Inicio:
          </label>
          <input
            type="date"
            className="form-control"
            placeholder="Fecha de Inicio:"
            {...register("fecha_inicio", { required: true })}
            defaultValue={obtenerFechaActual()}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Cantidad del Producto:</label>
          <input
            className="form-control"
            type="number"
            {...register("cantidad_producto", { required: true })}
            onChange={handleCantidadChange}
            value={cantidad || ""}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Fecha próximo pago</label>
          <input
            className="form-control"
            type="date"
            placeholder="Vencimiento"
            {...register("vencimiento", { required: true })}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Estado del Pago:</label>
          <select
            className="form-select"
            {...register("estado", { required: true })}
          >
            <option value="">Selecciona el Estado del Pago</option>
            <option value="pendiente">Pendiente</option>
            <option value="cancelado">Cancelado</option>
          </select>
          {errors.estado && <span>Este campo es requerido</span>}
          <button
            className="btn btn-success float-end"
            style={{ position: "absolute", right: "175px" }}
          >
            Guardar Cliente
          </button>
          {params.id && (
            <button
              className="btn btn-danger"
              style={{ position: "absolute", right: "320px" }}
              onClick={async () => {
                const aceptar = window.confirm("Esta seguro de eliminar");
                if (aceptar) {
                  await deleteCliente(params.id);
                  toast.success("Eliminado Correctamente", {
                    position: "top-center",
                    style: {
                      background: "#101010",
                      color: "#fff",
                      marginTop: "60px",
                    },
                  });
                  navigate("/clienteAtuntaqui");
                }
              }}
            >
              <i className="bi bi-trash"></i>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};