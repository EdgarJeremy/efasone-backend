// Initializes the `images` service on path `/images`
const { Images } = require('./images.class');
const hooks = require('./images.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/images/:id', async (req, res) => {
    
  });
};
