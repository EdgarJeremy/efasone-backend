const assert = require('assert');
const app = require('../../src/app');

describe('\'districts\' service', () => {
  it('registered the service', () => {
    const service = app.service('districts');

    assert.ok(service, 'Registered the service');
  });
});
