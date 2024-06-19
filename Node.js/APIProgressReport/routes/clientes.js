//preenche pra mim
const express = require('express');
const clienteController = require('./../controllers/clientesController');

const router = express.Router();

router
   .route('/')
   .get(clienteController.getAllClientes)
   .post(clienteController.createCliente);

router
    .route('/:id')
    .get(clienteController.getClienteID)
    .patch(clienteController.updateClienteNome)
    .delete(clienteController.deleteCliente);

router
    .route('/nome/:nome')
    .get(clienteController.getClienteNome);

module.exports = router;