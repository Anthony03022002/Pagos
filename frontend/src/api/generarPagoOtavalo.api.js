import axios from "axios";

const generarPagoOtavaloApi = axios.create({
    baseURL: 'http://localhost:8000/generarPagoOtavalo/generarPagoOtavalo/'
})
export const getAllPagos = () => generarPagoOtavaloApi.get('/')

export const getPago = (id) => generarPagoOtavaloApi.get(`/${id}/`);

export const createPagos = (pagos) => generarPagoOtavaloApi.post('/', pagos);

export const deletePagos = (id) => generarPagoOtavaloApi.delete(`/${id}`)

export const updatePagos= (id, pagos) => generarPagoOtavaloApi.put(`/${id}/`, pagos)



