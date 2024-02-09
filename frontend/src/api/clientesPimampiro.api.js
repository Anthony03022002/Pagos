import axios from 'axios'

const clientePimampiroApi = axios.create({
    baseURL: 'http://localhost:8000/clientesPimampiro/clientesPimampiro/'
})

export const getAllClientes = () => clientePimampiroApi.get('/');

export const getCliente = (id) => clientePimampiroApi.get(`/${id}/`);

export const createCliente = (clientes) => clientePimampiroApi.post('/', clientes);

export const deleteCliente = (id) => clientePimampiroApi.delete(`/${id}`)

export const updateCliente= (id, clientes) => clientePimampiroApi.put(`/${id}/`, clientes)

export const cancelarPagoCliente = (id, tipoPago) => clientePimampiroApi.post('/cancelar-pago', { id, tipoPago });