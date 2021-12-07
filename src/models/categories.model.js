// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const categories = sequelizeClient.define('categories', {
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
  categories.associate = function (models) {
    categories.belongsTo(models.departments, { onDelete: 'cascade' });
    categories.hasMany(models.reports, { onDelete: 'cascade' });
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return categories;
};
