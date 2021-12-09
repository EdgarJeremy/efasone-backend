// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    console.log(context);
    if (context.data.forwardedToId) {
      const report = await context.service.get(context.id);
      const category = await context.app.service('categories').get(report.categoryId);
      context.data.forwardedToId = category.departmentId;
      context.app.service('reports').emit('forwarded',
        {
          type: 'forwarded',
          data: {
            forwardedToId: context.data.forwardedToId
          }
        }
      );
    }
    return context;
  };
};
