const asknetilabService = require('../services/asknetilabService');

exports.handleAskNetilab = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  const response = asknetilabService.processText(text);
  return res.json(response);
};
