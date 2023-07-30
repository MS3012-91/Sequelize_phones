const { isInteger, isNumber } = require('lodash');
const { INTEGER } = require('sequelize');
const yup = require('yup');

const PHONES_VALIDATION_SCHEMA = yup.object({
  producer: yup
    .string("Must be a tsring type")
    .trim()
    .min(4, "Must by min 4 symbols")
    .matches(
      /^[A-Z][a-z]+$/,
      "Must start with an uppercase letter followed by lowercase letters"
    )
    .required(),
  model: yup.string().trim().min(4, "Must by min 4 symbols").required(),
  productedAt: yup
      .string()
      .matches(/^2\d{3}$/),
  ram: yup.number().positive().integer(),
  screenSize: yup.number().positive(),
  hasNfc: yup.boolean(),
});

module.exports.validatePhone = (req, res, next) => {
    const { body } = req;
    PHONES_VALIDATION_SCHEMA.validate(body) 
        .then ((validatedPhone) => 
        {next()})
        .catch((err) =>
        { console.log('err', err)
            next(err)
        })
}