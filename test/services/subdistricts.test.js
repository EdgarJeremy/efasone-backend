const assert = require('assert');
const app = require('../../src/app');

describe('\'subdistricts\' service', () => {
  it('registered the service', () => {
    const service = app.service('subdistricts');

    assert.ok(service, 'Registered the service');
  });
});
