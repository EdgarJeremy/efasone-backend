// Initializes the `department_categories` service on path `/department-categories`
const { DepartmentCategories } = require('./department_categories.class');
const createModel = require('../../models/department_categories.model');
const hooks = require('./department_categories.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/department-categories', new DepartmentCategories(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('department-categories');

  service.hooks(hooks);
};
