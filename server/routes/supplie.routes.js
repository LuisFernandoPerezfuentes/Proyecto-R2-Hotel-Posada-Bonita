const express = require('express');
const router = express.Router();

const supplier = require('../controllers/supplie.controller');

router.get('/', supplier.getSupplies);
router.post('/', supplier.createSupplies);
router.get('/:id', supplier.getSupplie);
router.put('/:id', supplier.editSupplie);
router.delete('/:id', supplier.deleteSupplie);

module.exports = router;