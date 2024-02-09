import axios from 'axios'

const clienteLagoagrioApi = axios.create({
    baseURL: 'http://localhost:8000/clientesLagoagrio/clientesLagoagrio/'
})

export const getAllClientes = () => clienteLagoagrioApi.get('/');

export const getCliente = (id) => clienteLagoagrioApi.get(`/${id}/`);

export const createCliente = (clientes) => clienteLagoagrioApi.post('/', clientes);

export const deleteCliente = (id) => clienteLagoagrioApi.delete(`/${id}`)

export const updateCliente= (id, clientes) => clienteLagoagrioApi.put(`/${id}/`, clientes)

export const cancelarPagoCliente = (id, tipoPago) => clienteLagoagrioApi.post('/cancelar-pago', { id, tipoPago });