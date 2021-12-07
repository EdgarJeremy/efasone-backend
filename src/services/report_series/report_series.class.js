/* eslint-disable no-unused-vars */
exports.ReportSeries = class ReportSeries {
  constructor(options) {
    this.options = options || {};
  }
  async setup(app) {
    this.app = app;
  }
  async find(params) {
    const sequelize = this.app.get('sequelizeClient');
    let query = `
      SELECT
      serie.day AS time,
      COUNT(t."createdAt") AS total
      FROM (
          SELECT date_series::date AS day
          FROM generate_series(
              '${params.query.from}'::date,
              '${params.query.to}'::date,
              '1 day'
          ) AS date_series
      ) AS serie
      LEFT JOIN reports t ON t."createdAt"::date = serie.day::date 
          AND status = ':status'
      GROUP  BY serie.day
      ORDER  BY time;
    `
    const pending = await sequelize.query(query.replace(':status', 'pending'), { type: sequelize.QueryTypes.SELECT });
    const process = await sequelize.query(query.replace(':status', 'process'), { type: sequelize.QueryTypes.SELECT });
    const done = await sequelize.query(query.replace(':status', 'done'), { type: sequelize.QueryTypes.SELECT });
    return {
      pending, process, done
    };
  }
};
