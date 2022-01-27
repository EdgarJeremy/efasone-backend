const assert = require('assert');
const app = require('../../src/app');

describe('\'department_categories\' service', () => {
  it('registered the service', () => {
    const service = app.service('department-categories');

    assert.ok(service, 'Registered the service');
  });
});
