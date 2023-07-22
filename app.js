const express = require('express');
const appRouter = require ('./Routers/index');

const app = express();

app.use(express.json());
app.use('/api', appRouter);

app.get('/test', (req, res) => {
    res.send(req.query)
});
//http://localhost:3000/test?ram=8


module.exports = app;
