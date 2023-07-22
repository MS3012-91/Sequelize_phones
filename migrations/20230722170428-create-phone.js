'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      producer: {
        type: Sequelize.STRING,
        allowNull: false
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      producted_at: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      ram: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      screen_size: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      has_nfc: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('phones');
  }
};