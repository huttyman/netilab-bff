const pool = require('./db');

exports.saveRequestLog = async ({ request_time, duration_ms, text, docIds }) => {
  const query =
    'INSERT INTO request_logs (request_time, duration_ms, request_text, doc_ids) VALUES ($1, $2, $3, $4)';
  await pool.query(query, [request_time, duration_ms, text, docIds]);
};
