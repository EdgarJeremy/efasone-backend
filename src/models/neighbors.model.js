// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const neighbors = sequelizeClient.define('neighbors', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  neighbors.associate = function (models) {
    neighbors.belongsTo(models.subdistricts);
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return neighbors;
};