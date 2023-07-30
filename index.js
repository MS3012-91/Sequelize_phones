const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1'

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
    console.log (`Server is listening on ${PORT} port ${HOST} host`)
});


// const { Phones, Price } = require('./db/models');
// const { raw } = require('express');
//     (async function () {
//         try {
          // const newPhone = {
          //     producer: "Samsung",
          //     model: "12-XA",
          //     productedAt: "2022",
          //     ram: 8,
          //     screenSize: 16,
          //     hasNfc: true
          // };
          // const createdPhone = Phones.create(newPhone);
          // const newPhone2 = {
          //     producer: "Apple",
          //     model: "2525",
          //     productedAt: "2022",
          //     ram: 12,
          //     screenSize: 20,
          //     hasNfc: true
          // };
          // const createdPhone2 = Phones.create(newPhone2);
          // const newPrice = {
          //     purchasePrice: 20000,
          //     markup: [3,15],
          //     salesComission: [1,3],
          //     phonesId: 1
          // }
          // const createPrice = Price.create(newPrice);
          // const newPrice2 = {
          //   purchasePrice: 30000,
          //   markup: [10,18],
          //   salesComission: [1,4],
          //   phonesId: 2,
          // };
          // const createPrice2 = Price.create(newPrice2);

          //жесткая загрузка
          // const PhoneWithPrice = await Phones.findAll({
          //     include: Price,
          //     raw: true
          // })
          // console.log("PhoneWithPrice", PhoneWithPrice);

          //мягкая загрузка
          // const PhoneWithPrice = await Price.findByPk(1);
          // const gettingPhonePrice1 = await PhoneWithPrice.getPhone();
          // console.log("gettingPhonePrice1 ", gettingPhonePrice1);

        //   const PhoneWithPrice1 = await Phones.findByPk(1);
        //   const gettingPricePhone1 = await PhoneWithPrice1.getPrice({
        //     raw: true,
        //     attributes: {
        //       exclude: ["createdAt", "updatedAt"],
        //     },
        //   });
        //   console.log("gettingPricePhone1 ", gettingPricePhone1);

          //  const PriceWithPhone = await Price.findByPk(1);
          //  const gettingPhonePrice = await PriceWithPhone.getPhone({
          //       raw: true,
          //       attributes: {
          //         exclude: ["createdAt", "updatedAt"],
          //       },
          //     });
          //       console.log("gettingPhonePrice ", gettingPhonePrice);
//         }
            
//         catch (err) {
//             console.log('err', err)
//             }
//       }  
// )()