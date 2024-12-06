const express = require('express');
const router = express.Router();
const lightning = require('../services/lightning');
const logger = require('../config/logger');

router.post('/create-invoice', async (req, res) => {
  try {
    const { amount, memo } = req.body;
    const invoice = await lightning.createInvoice(amount, memo);
    res.json(invoice);
  } catch (error) {
    logger.error('Create invoice error', { error: error.message });
    res.status(500).json({ error: error.message });
  }
});

router.post('/send-bitcoin', async (req, res) => {
  try {
    const { paymentRequest } = req.body;
    const payment = await lightning.payInvoice(paymentRequest);
    res.json(payment);
  } catch (error) {
    logger.error('Send payment error', { error: error.message });
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;