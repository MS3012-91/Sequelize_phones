const createHttpError = require('http-errors');
const { Price, Phones } = require('../db/models');


module.exports.setPrice = async (req, res, next) => {
  const { body } = req;
  try { 
    const newPrice = await Price.create(body);
    if (!newPrice) {
      next(createHttpError[422]);
      return
    }
    res.status(201).send('New price created');
    }
    catch (err) {
        next(err)
    }
};

module.exports.getAllPrices = async (req, res, next) => {
  try {
    const findPriceList = await Price.findAll({
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    })
    if (!findPriceList) {
      next(createHttpError[404]);
      return
    }
    res.status(200).send(findPriceList);
  } catch (err) {
    next(err);
  }
};

module.exports.getPrice = async (req, res, next) => {
  const { PriceId } = req.params;
  try {
    const gettingPrice = await Price.findByPk(PriceId);
    if (!gettingPrice) {
      next(createHttpError[404])
      return
    }
    res.status(200).send(gettingPrice);
  } catch (err) {
    next(err);
  }
};

module.exports.updatePrice = async (req, res, next) => {
  const { body } = req;
  const { priceId } = req.params;
  try {
    const updaningPrice = await Price.findByPk(priceId);
    const updatedPrice = await updaningPrice.update(body, {
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });
    if (!updaningPrice) {
      next(createHttpError(404, 'Updating Price Not Found'));
      return
    } else if (!updatedPrice) {
      next(createHttpError(404, "Rewritind Error"));
      return
    }
    res.status(200).send('Price updated successfully')
  } catch (err) {
    next(err);
  }
};

module.exports.deletePrice = async (req, res, next) => {
  const {priceId}= req.params
  try {
    const deletedPrice = await Price.destroy({
    where: {id:priceId}
    })
    if (!deletedPrice) {
      next(createHttpError[404])
      return
    }
    res.status(200).send('Deletes succesfully')
  } catch (err) {
    next(err);
  }
};

//жесткая загрузка
// module.exports.getPriceWithPhone = async (req, res, next) => {
//   const { priceId } = req.params;
//   try {
//     const priceWithPhone = await Price.findByPk(priceId, {
//       include: Phones,
//       raw: true,
//       attributes: {
//         exclude: ["createdAt", "updatedAt"],
//       },
//     });
//     if (!priceWithPhone) {
//       res.status(404).send("PriceWithPhone not found");
//       return
//     }
//     res.status(200).send(priceWithPhone);
//   }
//           catch (err) {
//            next(err)
//             }
//       }  

//мягкая загрузка
module.exports.getPriceWithPhone = async (req, res, next) => {
  const { priceId } = req.params;
  try {
    const findPrice = await Price.findByPk(priceId);
    const gettingPhonePrice = await findPrice.getPhone({
      raw: true,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (!gettingPhonePrice) {
      next(createHttpError[404])
    return} 
      res.status(200).send(gettingPhonePrice);
  } catch (err) {
    next(err);
  }
};