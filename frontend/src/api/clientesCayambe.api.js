import axios from 'axios'

const clienteCayambeApi = axios.create({
    baseURL: 'http://localhost:8000/clientesCayambe/clientesCayambe/'
})

export const getAllClientes = () => clienteCayambeApi.get('/');

export const getCliente = (id) => clienteCayambeApi.get(`/${id}/`);

export const createCliente = (clientes) => clienteCayambeApi.post('/', clientes);

export const deleteCliente = (id) => clienteCayambeApi.delete(`/${id}`)

export const updateCliente= (id, clientes) => clienteCayambeApi.put(`/${id}/`, clientes)

export const cancelarPagoCliente = (id, tipoPago) => clienteCayambeApi.post('/cancelar-pago', { id, tipoPago });