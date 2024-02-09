import axios from 'axios'

const clienteOtavaloApi = axios.create({
    baseURL: 'http://localhost:8000/clientesOtavalo/clientesOtavalo/'
})

export const getAllClientes = () => clienteOtavaloApi.get('/');

export const getCliente = (id) => clienteOtavaloApi.get(`/${id}/`);

export const createCliente = (clientes) => clienteOtavaloApi.post('/', clientes);

export const deleteCliente = (id) => clienteOtavaloApi.delete(`/${id}`)

export const updateCliente= (id, clientes) => clienteOtavaloApi.put(`/${id}/`, clientes)

export const cancelarPagoCliente = (id, tipoPago) => clienteOtavaloApi.post('/cancelar-pago', { id, tipoPago });