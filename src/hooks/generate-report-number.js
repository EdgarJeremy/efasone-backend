// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const now = new Date();
    const reports = await context.app.service('reports').find({
      query: {
        $limit: 0,
        createdAt: {
          $gte: now.setHours(0, 0, 0, 0),
          $lte: now.setHours(23, 59, 59)
        }
      }
    });
    const number = `${now.getDate()}${now.getMonth() + 1}${now.getFullYear()}-${reports.total + 1}`;
    context.data.number = number;
    return context;
  };
};
