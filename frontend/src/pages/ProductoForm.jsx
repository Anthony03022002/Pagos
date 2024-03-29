import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createProductos,
  deleteProductos,
  updateProductos,
  getAllProducto,
} from "../api/productos.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";


export const ProductoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateProductos(params.id, data);
      toast.success("Actualizado correctamente", {
        position: "top-center",
        style: {
          background: "#101010",
          color: "#fff",
          marginTop: "60px",
        },
      });
    } else {
      await createProductos(data);
      toast.success("Producto creado correctamente", {
        position: "top-center",
        style: {
          background: "#101010",
          color: "#fff",
          marginTop: "60px",
        },
      });
    }
    navigate("/productos");
  });

  useEffect(() => {
    async function loadProducto() {
      if (params.id) {
        const { data } = await getAllProducto(params.id);
        setValue("nombre_producto", data.nombre_producto);
        setValue("precio", data.precio);
      }
    }
    loadProducto();
  }, []);

  return (
    <div className="container mt-4">
      <Link to="/productos" className="btn btn-dark btn-lg">
          <i className="mt-1 bi bi-arrow-left"></i>
      </Link>
      <div class="col text-center mb-3">
        <h1>Crear Producto</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col">
            <label className="form-label">Producto</label>
            
            <input
              type="text"
              className="form-control"
              placeholder="Producto"
              {...register("nombre_producto", { required: true })}
            />
            {errors.nombre_producto && <span>Este campo es requerido</span>}
          </div>
          <div className="col">
            <label className="form-label">Precio</label>
            <input
              type="number"
              className="form-control"
              placeholder="Precio"
              {...register("precio", { required: true })}
            />
          </div>
          {errors.precio && <span>Este campo es requerido</span>}
        </div>
        <button
          className="btn btn-success float-end"
          style={{
            position: "absolute",
            right: "230px",
            backgroundColor: "#17494d",
            top: "300px",
          }}
        >
          {" "}
          Guardar Producto
        </button>
      </form>
      {params.id && (
        <button
          className="btn btn-danger"
          style={{ position: "absolute", right: "180px", top: "300px" }}
          onClick={async () => {
            const aceptar = window.confirm("Seguro de eliminar el producto");
            if (aceptar) {
              await deleteProductos(params.id);
              toast.success("Eliminado Correctamente", {
                position: "top-center",
                style: {
                  background: "#101010",
                  color: "#fff",
                  marginTop: "60px",
                },
              });
              navigate("/productos");
            }
          }}
        >
          <i className="bi bi-trash"></i>
        </button>
      )}
    </div>
  );
};
