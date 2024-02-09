import axios from "axios";

const generarPagoBolivarApi = axios.create({
    baseURL: 'http://localhost:8000/generarPagoBolivar/generarPagoBolivar/'
})
export const getAllPagos = () => generarPagoBolivarApi.get('/')

export const getPago = (id) => generarPagoBolivarApi.get(`/${id}/`);

export const createPagos = (pagos) => generarPagoBolivarApi.post('/', pagos);

export const deletePagos = (id) => generarPagoBolivarApi.delete(`/${id}`)

export const updatePagos= (id, pagos) => generarPagoBolivarApi.put(`/${id}/`, pagos)



