const { Phones, Price } = require("../db/models");
const createHttpError = require("http-errors");

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;
  try {
    const newPhone = await Phones.create(body);
    res.status(201).send("Created!");
    if (!newPhone) {
      next(createHttpError[400]);
      return;
    }
  } catch (err) {
    next(err);
  }
};

module.exports.getAllPhones = async (req, res, next) => {
  const { pagination } = req;
  console.log("pagination", pagination);
  try {
    const foundPhones = await Phone.findAll({
      raw: true,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      order: ["id"],
      limit: pagination.limit,
      offset: pagination.offset,
    });
    if (!foundPhones) {
      next(createHttpError[404])
      return;
    }
    res.status(200).send(foundPhones);
    return;
  } catch (err) {
    next(err)
  }
};

module.exports.getPhone = async (req, res, next) => {
  const { phoneId } = req.params;
  try {
    const foundPhone = await Phones.findByPk(phoneId, {
      raw: true,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (!foundPhone) {
        next(createHttpError[404]);
      return;
    }
    res.status(200).send(foundPhone);
  } catch (err) {
    next(err)
  }
};

module.exports.updatePhone = async (req, res, next) => {
  const { phoneId } = req.params;
  const { body } = req;
  try {
    const updatePhone = await Phones.update(body, {
      where: { id: phoneId },
    });
    if (updatePhone[0] === 0) {
      next(createHttpError[404])
      return;
    }
    res.status(200).send("Phone info updated");
  } catch (err) {
   next(err)
  }
};

module.exports.deletePhone = async (req, res, next) => {
  const { phoneId } = req.params;
  try {
    const deletedPhone = await Phones.destroy({
      where: { id: phoneId },
    })
    if (!deletedPhone) {
      next(createHttpError[404])
      return;
    }
    res.status(200).send("Phone was deleted");
  } catch (err) {
    next(err)
  }
};


//жесткая загрузка
module.exports.getPhoneWithPrice = async (req, res, next) => {
  const { phoneId } = req.params;
  try {
    const phoneWithPrice = await Phones.findByPk(phoneId, {
      include: Price,
      raw: true,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (!phoneWithPrice) {
      next (createHttpError(404,"PriceWithPhone not found"));
      return;
    }
    res.status(200).send(phoneWithPrice);
  } catch (err) {
    next(err);
  }
};  

//мягкая загрузка
// module.exports.getPhoneWithPrice = async (req, res, next) => {
//     const { phoneId } = req.params;
//     console.log('phonesId', phoneId)
//   try {
//       const findPhone = await Phones.findByPk(phoneId); 
//       if (!findPhone) {
//           next(createHttpError(404, 'Phone not found'));
//           return
//       }
//       const gettingPricePhone = await findPhone.getPrice({
//         where: { phoneId },
//         raw: true,
//         attributes: {
//           exclude: ["createdAt", "updatedAt"],
//           include: ["producer", "model", "has_nfc"],
//         },
//       });
//     if (!gettingPricePhone) {
//         next(createHttpError(404, "gettingPricePhone not found" ));
//       return;
//     } 
//       res.status(200).send(gettingPricePhone);
//   } catch (err) {
//       console.log('err', err)
//       next(err);
//   }
// };