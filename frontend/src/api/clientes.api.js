import axios from 'axios'

const clienteApi = axios.create({
    baseURL: 'http://localhost:8000/clientes/clientes/'
})

export const getAllClientes = () => clienteApi.get('/');

export const getCliente = (id) => clienteApi.get(`/${id}/`);

export const createCliente = (clientes) => clienteApi.post('/', clientes);

export const deleteCliente = (id) => clienteApi.delete(`/${id}`)

export const updateCliente= (id, clientes) => clienteApi.put(`/${id}/`, clientes)

export const cancelarPagoCliente = (id, tipoPago) => clienteApi.post('/cancelar-pago', { id, tipoPago });
