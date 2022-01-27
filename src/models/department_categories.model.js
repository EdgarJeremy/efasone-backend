// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const departmentCategories = sequelizeClient.define('department_categories', {
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  departmentCategories.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
    departmentCategories.belongsTo(models.departments, { onDelete: 'cascade' });
    departmentCategories.belongsTo(models.categories, { onDelete: 'cascade' });
  };

  return departmentCategories;
};
