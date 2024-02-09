import axios from "axios";

const generarPagoPimampiroApi = axios.create({
    baseURL: 'http://localhost:8000/generarPagoPimampiro/generarPagoPimampiro/'
})
export const getAllPagos = () => generarPagoPimampiroApi.get('/')

export const getPago = (id) => generarPagoPimampiroApi.get(`/${id}/`);

export const createPagos = (pagos) => generarPagoPimampiroApi.post('/', pagos);

export const deletePagos = (id) => generarPagoPimampiroApi.delete(`/${id}`)

export const updatePagos= (id, pagos) => generarPagoPimampiroApi.put(`/${id}/`, pagos)



