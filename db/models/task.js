'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        not: /^\s+$/,
        len: [4,500]
      }
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    deadline: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,
        isAfter: new Date().toISOString()
      } 
    },
  }, {
    sequelize,
    modelName: 'Task',
    underscored:true
  });
  return Task;
};