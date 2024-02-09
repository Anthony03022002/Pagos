import axios from 'axios'

const clienteAngelApi = axios.create({
    baseURL: 'http://localhost:8000/clientesAngel/clientesAngel/'
})

export const getAllClientes = () => clienteAngelApi.get('/');

export const getCliente = (id) => clienteAngelApi.get(`/${id}/`);

export const createCliente = (clientes) => clienteAngelApi.post('/', clientes);

export const deleteCliente = (id) => clienteAngelApi.delete(`/${id}`)

export const updateCliente= (id, clientes) => clienteAngelApi.put(`/${id}/`, clientes)

export const cancelarPagoCliente = (id, tipoPago) => clienteAngelApi.post('/cancelar-pago', { id, tipoPago });