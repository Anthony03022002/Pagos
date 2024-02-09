import axios from "axios";

const generarPagoLagoApi = axios.create({
    baseURL: 'http://localhost:8000/generarPagoLagoagrio/generarPagoLagoagrio/'
})
export const getAllPagos = () => generarPagoLagoApi.get('/')

export const getPago = (id) => generarPagoLagoApi.get(`/${id}/`);

export const createPagos = (pagos) => generarPagoLagoApi.post('/', pagos);

export const deletePagos = (id) => generarPagoLagoApi.delete(`/${id}`)

export const updatePagos= (id, pagos) => generarPagoLagoApi.put(`/${id}/`, pagos)



