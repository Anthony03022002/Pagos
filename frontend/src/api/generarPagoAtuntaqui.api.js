import axios from "axios";

const generarPagoAtuntaquiApi = axios.create({
    baseURL: 'http://localhost:8000/generarPagoAtuntaqui/generarPagoAtuntaqui/'
})
export const getAllPagos = () => generarPagoAtuntaquiApi.get('/')

export const getPago = (id) => generarPagoAtuntaquiApi.get(`/${id}/`);

export const createPagos = (pagos) => generarPagoAtuntaquiApi.post('/', pagos);

export const deletePagos = (id) => generarPagoAtuntaquiApi.delete(`/${id}`)

export const updatePagos= (id, pagos) => generarPagoAtuntaquiApi.put(`/${id}/`, pagos)



