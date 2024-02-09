import axios from "axios";

const generarPagoMiraApi = axios.create({
    baseURL: 'http://localhost:8000/generarPagoMira/generarPagoMira/'
})
export const getAllPagos = () => generarPagoMiraApi.get('/')

export const getPago = (id) => generarPagoMiraApi.get(`/${id}/`);

export const createPagos = (pagos) => generarPagoMiraApi.post('/', pagos);

export const deletePagos = (id) => generarPagoMiraApi.delete(`/${id}`)

export const updatePagos= (id, pagos) => generarPagoMiraApi.put(`/${id}/`, pagos)



