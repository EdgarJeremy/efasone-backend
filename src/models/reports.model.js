// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const reports = sequelizeClient.define('reports', {
    number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },

    status: {
      type: DataTypes.ENUM('pending', 'process', 'done'),
      allowNull: false,
      defaultValue: 'pending'
    },

    act_process_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    act_process_file: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    act_done_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    act_done_file: {
      type: DataTypes.TEXT,
      allowNull: true
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  reports.associate = function (models) {
    reports.belongsTo(models.cities, { onDelete: 'cascade' });
    reports.belongsTo(models.districts, { onDelete: 'cascade' });
    reports.belongsTo(models.subdistricts, { onDelete: 'cascade' });
    reports.belongsTo(models.neighbors, { onDelete: 'cascade' });

    reports.belongsTo(models.categories, { onDelete: 'cascade' });
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return reports;
};
