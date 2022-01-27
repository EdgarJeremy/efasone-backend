const users = require('./users/users.service.js');
const reports = require('./reports/reports.service.js');
const categories = require('./categories/categories.service.js');
const departments = require('./departments/departments.service.js');
const cities = require('./cities/cities.service.js');
const districts = require('./districts/districts.service.js');
const subdistricts = require('./subdistricts/subdistricts.service.js');
const neighbors = require('./neighbors/neighbors.service.js');
const reportSeries = require('./report_series/report_series.service.js');
const images = require('./images/images.service.js');
const departmentCategories = require('./department_categories/department_categories.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(reports);
  app.configure(categories);
  app.configure(departments);
  app.configure(cities);
  app.configure(districts);
  app.configure(subdistricts);
  app.configure(neighbors);
  app.configure(reportSeries);
  app.configure(images);
  app.configure(departmentCategories);
};
