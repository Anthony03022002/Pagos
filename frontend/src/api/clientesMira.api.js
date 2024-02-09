import axios from 'axios'

const clienteMiraApi = axios.create({
    baseURL: 'http://localhost:8000/clientesMira/clientesMira/'
})

export const getAllClientes = () => clienteMiraApi.get('/');

export const getCliente = (id) => clienteMiraApi.get(`/${id}/`);

export const createCliente = (clientes) => clienteMiraApi.post('/', clientes);

export const deleteCliente = (id) => clienteMiraApi.delete(`/${id}`)

export const updateCliente= (id, clientes) => clienteMiraApi.put(`/${id}/`, clientes)

export const cancelarPagoCliente = (id, tipoPago) => clienteMiraApi.post('/cancelar-pago', { id, tipoPago });