const { authenticate } = require('@feathersjs/authentication').hooks;

const generateReportNumber = require('../../hooks/generate-report-number');

const forwardReport = require('../../hooks/forward-report');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [generateReportNumber()],
    update: [],
    patch: [forwardReport()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
