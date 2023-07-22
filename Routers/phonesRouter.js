const { Router } = require('express');
const { phonesController } = require('../Controllers');
const { paginatePhones }  = require('../middleware');

const phonesRouter = Router();

phonesRouter
    .route ('/')
    .get(paginatePhones.mwPhones,phonesController.getAllPhones)
    .post(phonesController.createPhone);

phonesRouter
    .route('/:phoneId')
    .get(phonesController.getPhone)
    .patch(phonesController.updatePhone)
    .delete(phonesController.deletePhone);

module.exports = phonesRouter;