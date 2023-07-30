'use strict';
const {
  Model
} = require('sequelize');
const prices = require('./prices');
//const { FOREIGNKEYS } = require('sequelize/types/query-types');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Phone.hasOne(models.Price, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "phonesId",
          allowNull: false,
        },
        
      });
    }
  }
  Phone.init(
    {
      producer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[A-Z][a-z]+$/,
        },
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productedAt: {
        type: DataTypes.STRING,
        validate: {
          isDate: true,
          isBefore: new Date().getFullYear().toString(),
          is: /^2\d{3}$/,
        },
      },
      ram: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      screenSize: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hasNfc: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Phones",
      underscored: true,
    }
  );
  return Phone;
};