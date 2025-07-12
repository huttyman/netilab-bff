const queryNetilabAiService = require('../services/queryNetilabAiService');
const logService = require('../services/logService');

exports.handleQueryNetilabAi = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const start = Date.now();
    const result = await queryNetilabAiService.queryText(text);
    const duration = Date.now() - start;
    const docIds = Array.isArray(result.dekas)
      ? result.dekas.map((d) => d.doc_id)
      : [];
    try {
      await logService.saveRequestLog({
        request_time: new Date(start),
        duration_ms: duration,
        text,
        docIds,
      });
    } catch (logErr) {
      console.error('Failed to save request log', logErr);
    }
    return res.json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to query AI service' });
  }
};

exports.handleDocs = async (req, res) => {
  try {
    const result = await queryNetilabAiService.getDocs();
    return res.json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to fetch docs from AI service' });
  }
};
