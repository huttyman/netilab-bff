const queryNetilabAiService = require('../services/queryNetilabAiService');

exports.handleQueryNetilabAi = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const result = await queryNetilabAiService.queryText(text);
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
