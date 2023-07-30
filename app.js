const express = require('express');
const appRouter = require('./Routers');
const { errorHandlers } = require('./middleware/errorHandlers');

const app = express();

app.use(express.json());
app.use('/api', appRouter);

app.use(errorHandlers);


module.exports = app;
