const { Router } = require('express');
const phonesRouter = require('./phonesRouter');
const appRouter = Router();

appRouter.use('/phones', phonesRouter);
module.exports = appRouter;

