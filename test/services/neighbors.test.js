const assert = require('assert');
const app = require('../../src/app');

describe('\'neighbors\' service', () => {
  it('registered the service', () => {
    const service = app.service('neighbors');

    assert.ok(service, 'Registered the service');
  });
});
