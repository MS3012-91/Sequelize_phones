const { Router } = require('express');
const yup = require('yup');
const { pricesController } = require('../Controllers');
const {validatorPrices} = require('../middleware');
console.log('validatorPrices', validatorPrices);

const pricesRouter = Router();


pricesRouter
  .route("/")
  .get(pricesController.getAllPrices)
  .post(validatorPrices.validatorPrices, pricesController.setPrice);

pricesRouter
  .route("/:priceId")
  //.get(pricesController.getPrice)
  .patch(validatorPrices.validatorPrices, pricesController.updatePrice)
  .delete(pricesController.deletePrice);

    //для получения связанных таблиц
pricesRouter.route('/:priceId')
    .get(pricesController.getPriceWithPhone);
  

module.exports = pricesRouter;