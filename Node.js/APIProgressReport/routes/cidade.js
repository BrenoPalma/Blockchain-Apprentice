const express = require('express');
const cidadeController = require('./../controllers/cidadeController');

const router = express.Router();

// router.param('id', tourController.checkID);

router
  .route('/')
  .get(cidadeController.getAllCidade)
  .post(cidadeController.createCidade);

router
  .route('/nome/:nome')
  .get(cidadeController.getCidade);

router
  .route('/estado/:estado')
  .get(cidadeController.getAllCidadeEstado);

module.exports = router;