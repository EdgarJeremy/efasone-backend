// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const report = context.data;
    const messaging = context.app.get('fcm');
    const category = await context.app.service('categories').get(report.categoryId);
    const department = await context.app.service('departments').get(category.departmentId);
    const condition = `'report-leader' in topics || 'report-${department.id}' in topics`;
    const message = {
      notification: {
        title: 'Aspirasi Masuk!',
        body: 'Klik disini untuk melihat detail'
      },
      data: { id: `${report.id}` },
      condition
    };
    try {
      const response = await messaging.send(message);
      console.log(response);
    } catch (e) { console.log(e) }
    return context;
  };
};
