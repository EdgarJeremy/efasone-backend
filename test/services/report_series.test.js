const assert = require('assert');
const app = require('../../src/app');

describe('\'report_series\' service', () => {
  it('registered the service', () => {
    const service = app.service('report-series');

    assert.ok(service, 'Registered the service');
  });
});
