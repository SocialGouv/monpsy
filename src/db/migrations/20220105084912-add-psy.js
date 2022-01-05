module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('psychologist', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      last_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      archived: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      email_pro: {
        allowNull: false,
        type: Sequelize.STRING
      },
      teleconsultation: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      languages: {
        allowNull: false,
        type: Sequelize.STRING
      },
      website: {
        allowNull: false,
        type: Sequelize.STRING
      },
      longitude: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      latitude: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      instructor_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('psychologist');
  },
};