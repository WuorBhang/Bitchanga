const fs = require('fs');
require('dotenv').config();

const lndConfig = {
  cert: fs.readFileSync(process.env.LND_CERT_PATH).toString('base64'),
  macaroon: fs.readFileSync(process.env.LND_MACAROON_PATH).toString('base64'),
  socket: process.env.LND_SOCKET,
};

module.exports = lndConfig;