'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Phone.init({
    producer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-Z][a-z]+$/
      }
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productedAt: {
      type: DataTypes.STRING,
      validate: {
        isDate: true,
        isBefore: new Date().getFullYear().toString()
      }
    },
    ram: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    screenSize: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hasNfc: {
      type: DataTypes.BOOLEAN,
      allowNull:false}
  }, {
    sequelize,
    modelName: 'Phone',
    underscored:true
  });
  return Phone;
};