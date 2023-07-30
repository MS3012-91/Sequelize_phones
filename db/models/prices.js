'use strict';
const {
  Model
} = require('sequelize');
const Phone = require ('./phone')
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Price.belongsTo(models.Phones,
        {
          foreignKey:
          {
            name: "phonesId",
            allowNull: false
          }
        }
       );
    }
  }
  Price.init(
    {
      purchasePrice: {
      type: DataTypes.FLOAT,
      allowNull:false},
      markup: {
        type:DataTypes.RANGE(DataTypes.DECIMAL),
        allowNull:false
      },
      salesComission: {
        type: DataTypes.RANGE(DataTypes.DECIMAL)
      },
    },
    {
      sequelize,
      modelName: "Price",
      underscored: true
    }
  );
  return Price;
};