import axios from 'axios'

const productosApi = axios.create({
    baseURL: 'http://localhost:8000/productos/productos/'
})

export const getAllProductos = () => productosApi.get('/')

export const getAllProducto = (id) => productosApi.get(`/${id}/`)

export const createProductos = (productos) => productosApi.post('/', productos);

export const deleteProductos = (id) => productosApi.delete(`/${id}`);

export const updateProductos = (id, productos) => productosApi.put(`/${id}/`, productos)
