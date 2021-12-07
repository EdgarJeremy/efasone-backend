// Initializes the `report_series` service on path `/report-series`
const { ReportSeries } = require('./report_series.class');
const hooks = require('./report_series.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/report-series', new ReportSeries(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('report-series');

  service.hooks(hooks);
};
