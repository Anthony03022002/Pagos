import axios from 'axios'

const clienteAtuntaquiApi = axios.create({
    baseURL: 'http://localhost:8000/clientesAtuntaqui/clientesAtuntaqui/'
})

export const getAllClientes = () => clienteAtuntaquiApi.get('/');

export const getCliente = (id) => clienteAtuntaquiApi.get(`/${id}/`);

export const createCliente = (clientes) => clienteAtuntaquiApi.post('/', clientes);

export const deleteCliente = (id) => clienteAtuntaquiApi.delete(`/${id}`)

export const updateCliente= (id, clientes) => clienteAtuntaquiApi.put(`/${id}/`, clientes)

export const cancelarPagoCliente = (id, tipoPago) => clienteAtuntaquiApi.post('/cancelar-pago', { id, tipoPago });