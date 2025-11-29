const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();
app.use(express.json());
require('./routes')(app);
app.listen(3000, () => console.log('Server listening on port 3000'));