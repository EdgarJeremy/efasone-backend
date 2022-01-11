const { authenticate } = require('@feathersjs/authentication').hooks;

const generateReportNumber = require('../../hooks/generate-report-number');

const sendNotification = require('../../hooks/send-notification');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [generateReportNumber()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [sendNotification()],
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
