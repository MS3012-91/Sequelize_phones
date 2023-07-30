'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("prices", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      purchase_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      markup: {
        type: Sequelize.RANGE(Sequelize.DECIMAL),
        allowNull: false,
      },
      sales_comission: {
        type: Sequelize.RANGE(Sequelize.DECIMAL),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      phones_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "phones",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('prices');
  }
};