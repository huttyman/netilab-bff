const express = require('express');
const router = express.Router();
const queryNetilabAiController = require('../controllers/queryNetilabAiController');

/**
 * @swagger
 * /query-netilab-ai/text:
 *   post:
 *     summary: Proxy request to python-ai service
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
router.post('/text', queryNetilabAiController.handleQueryNetilabAi);

/**
 * @swagger
 * /query-netilab-ai/docs:
 *   get:
 *     summary: Retrieve documentation from python-ai service
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/docs', queryNetilabAiController.handleDocs);

module.exports = router;
