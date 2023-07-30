const { Router } = require('express');
const { phonesController } = require('../Controllers');
const { paginatePhones } = require('../middleware');
const {validatePhone} = require('../middleware')

const phonesRouter = Router();

phonesRouter
  .route("/")
  .get(paginatePhones.mwPhones, phonesController.getAllPhones)
  .post(validatePhone.validatePhone, phonesController.createPhone);

phonesRouter
  .route("/:phoneId")
  //.get(phonesController.getPhone)
  .patch(validatePhone.validatePhone, phonesController.updatePhone)
  .delete(phonesController.deletePhone)
  .get(phonesController.getPhoneWithPrice);

module.exports = phonesRouter;