const { Router } = require('express');
const phonesRouter = require('./phonesRouter');
const tasksRouter = require('./tasksRouter');
const pricesRouter = require('./pricesRouter');
const appRouter = Router();

appRouter.use('/phones', phonesRouter);
appRouter.use('/tasks', tasksRouter);
appRouter.use('/prices', pricesRouter);


module.exports = appRouter;

