/* eslint-disable no-unused-vars */
exports.Images = class Images {
  constructor (options) {
    this.options = options || {};
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

};
