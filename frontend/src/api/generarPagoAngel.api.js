import axios from "axios";

const generarPagoAngelApi = axios.create({
    baseURL: 'http://localhost:8000/generarPagoAngel/generarPagoAngel/'
})
export const getAllPagos = () => generarPagoAngelApi.get('/')

export const getPago = (id) => generarPagoAngelApi.get(`/${id}/`);

export const createPagos = (pagos) => generarPagoAngelApi.post('/', pagos);

export const deletePagos = (id) => generarPagoAngelApi.delete(`/${id}`)

export const updatePagos= (id, pagos) => generarPagoAngelApi.put(`/${id}/`, pagos)



