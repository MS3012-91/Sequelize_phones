const yup = require("yup");

const PRICES_Validation_Schema = yup.object({
    purchasePrice: yup
      .number("Not a number")
      .positive("Must Be positive")
      .required(),
    markup: yup
      .array("Value must be an object with 2 float values")
      .length(2, "Array must have 2 numbers")
      .of(yup.number("Elements of array must be a numbers"))
      .required(),
    salesComission: yup
      .array("Value must be an object with 2 float values")
      .length(2, "Array must have 2 numbers")
      .of(yup.number(), "Elements of array must be a nimbers")
      .required(),
});
  
module.exports.validatorPrices = (req, res, next) => {
  const { body } = req;
  PRICES_Validation_Schema.validate(body)
    .then((validatedPrice) => {
      next();
    })
    .catch((err) => {
      next(err);
    });
};

