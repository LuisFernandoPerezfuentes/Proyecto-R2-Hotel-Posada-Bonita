const express = require('express');
const router = express.Router();

const client = require('../controllers/client.controller');

router.get('/', client.getClients);
router.post('/', client.createClients);
router.get('/:id', client.getClient);
router.put('/:id', client.editClient);
router.delete('/:id', client.deleteClient);

module.exports = router;