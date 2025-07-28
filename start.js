process.env.N8N_PORT = process.env.PORT || 5678;
process.env.N8N_HOST = "0.0.0.0";

const { start } = require("n8n");
start();