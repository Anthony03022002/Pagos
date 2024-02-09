import axios from 'axios'

const clienteBolivarApi = axios.create({
    baseURL: 'http://localhost:8000/clientesBolivar/clientesBolivar/'
})

export const getAllClientes = () => clienteBolivarApi.get('/');

export const getCliente = (id) => clienteBolivarApi.get(`/${id}/`);

export const createCliente = (clientes) => clienteBolivarApi.post('/', clientes);

export const deleteCliente = (id) => clienteBolivarApi.delete(`/${id}`)

export const updateCliente= (id, clientes) => clienteBolivarApi.put(`/${id}/`, clientes)

export const cancelarPagoCliente = (id, tipoPago) => clienteBolivarApi.post('/cancelar-pago', { id, tipoPago });