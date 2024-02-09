import axios from "axios";

const generarPagoCayambeApi = axios.create({
    baseURL: 'http://localhost:8000/generarPagoCayambe/generarPagoCayambe/'
})
export const getAllPagos = () => generarPagoCayambeApi.get('/')

export const getPago = (id) => generarPagoCayambeApi.get(`/${id}/`);

export const createPagos = (pagos) => generarPagoCayambeApi.post('/', pagos);

export const deletePagos = (id) => generarPagoCayambeApi.delete(`/${id}`)

export const updatePagos= (id, pagos) => generarPagoCayambeApi.put(`/${id}/`, pagos)



