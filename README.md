# Bitchanga
Implements detailed analytics that provide insights into spending patterns. Through this, users can gain a better understanding of their financial habits and make informed decisions based on visual representation and comprehensive reports.

# LND Invoice Creation Service

This project provides a simple way to create Lightning Network invoices using the `ln-service` library and interact with an LND (Lightning Network Daemon) node. The service supports creating invoices, reading macaroon files, and handling invoice payments.

## Features
- Create Lightning Network invoices with a specified amount.
- Read macaroon and certificate files from the environment variables.
- Supports secure interaction with LND via gRPC.

## Requirements
- Node.js (v14 or later)
- LND (Lightning Network Daemon) node
- Access to the LND macaroon and TLS certificate files
- `.env` file with LND configuration

## Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/lnd-invoice-service.git
cd lnd-invoice-service


### Step 2: Install Dependencies

npm install

### Step 3: Set Up Environment Variables

# LND Configuration
LND_CERT_PATH=/path/to/tls.cert
LND_MACAROON_PATH=/path/to/admin.macaroon
LND_INVOICE_MACAROON_PATH=/path/to/invoice.macaroon
LND_SOCKET=your-lnd-grpc-host:port


### Step 4: Start the app then

node index.js
